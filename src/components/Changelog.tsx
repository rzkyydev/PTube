"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowSquareOut,
  CalendarBlank,
  GithubLogo,
  Tag,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

const RELEASES_API =
  "https://api.github.com/repos/rzkyydev/PTube/releases/latest";

type Release = {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  body: string | null;
};

type ChangelogProps = {
  dict: Dictionary["changelog"];
};

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "bullet"; text: string };

function Inline({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded bg-surface-2 px-1 py-0.5 font-mono text-[0.85em] text-accent"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink-1">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <a
              key={i}
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent-deep"
            >
              {link[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function parseBody(body: string): Block[] {
  return body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce<Block[]>((acc, line) => {
      const heading = line.match(/^(#{1,6})\s+(.*)$/);
      if (heading) {
        acc.push({ type: "heading", level: heading[1].length, text: heading[2].trim() });
        return acc;
      }
      const bullet = line.match(/^[-*+]\s+(.*)$/);
      if (bullet) {
        acc.push({ type: "bullet", text: bullet[1].trim() });
        return acc;
      }
      acc.push({ type: "bullet", text: line.replace(/^#+,?\s*/, "") });
      return acc;
    }, []);
}

export function Changelog({ dict }: ChangelogProps) {
  const [release, setRelease] = useState<Release | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(RELEASES_API, {
      headers: { Accept: "application/vnd.github+json" },
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((data: Release) => {
        if (active) setRelease(data);
      })
      .catch(() => {
        if (active) setError(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const blocks = release?.body ? parseBody(release.body) : [];

  const renderBlocks: ReactNode[] = [];
  blocks.forEach((block, i) => {
    if (block.type === "heading") {
      renderBlocks.push(
        <h3
          key={i}
          className={
            block.level >= 3
              ? "mt-6 first:mt-0 pt-4 text-sm font-bold uppercase tracking-wider text-accent first:pt-0"
              : "mt-7 first:mt-0 pt-4 text-lg font-bold text-ink-1 first:pt-0"
          }
        >
          <Inline text={block.text} />
        </h3>
      );
    } else {
      renderBlocks.push(
        <div key={i} className="mt-1.5 flex items-start gap-2.5 text-sm leading-relaxed text-ink-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
          <Inline text={block.text} />
        </div>
      );
    }
  });

  return (
    <section id="changelog" className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {dict.eyebrow}
          </span>

          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {dict.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-ink-3 sm:text-lg">
            {dict.desc}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface">
          {release ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Tag size={22} weight="bold" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-4">
                      {dict.latest}
                    </p>
                    <a
                      href={release.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate text-lg font-bold text-ink-1 transition-colors hover:text-accent"
                    >
                      {release.name || release.tag_name}
                    </a>
                  </div>
                </div>

                <a
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-4 py-2 text-sm font-bold text-ink-2 transition-colors hover:border-line-strong hover:text-ink-1"
                >
                  <GithubLogo size={16} weight="bold" />
                  {dict.viewChangelog}
                  <ArrowSquareOut size={14} weight="bold" />
                </a>
              </div>

              <div className="px-6 py-5">
                <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-4">
                  <CalendarBlank size={14} weight="bold" />
                  {dict.published} ·{" "}
                  {new Date(release.published_at).toLocaleDateString()}
                </p>

                {blocks.length > 0 && (
                  <div className="mt-4">{renderBlocks}</div>
                )}
              </div>
            </>
          ) : error ? (
            <div className="px-6 py-10 text-center text-sm text-ink-4">
              <GithubLogo size={24} weight="bold" className="mx-auto mb-3 opacity-50" />
              <a
                href="https://github.com/rzkyydev/PTube/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-accent transition-colors hover:text-accent-deep"
              >
                {dict.linkRelease}
                <ArrowSquareOut size={14} weight="bold" />
              </a>
            </div>
          ) : (
            <div className="px-6 py-10 text-center text-sm text-ink-4">
              <div className="mx-auto mb-3 size-5 animate-spin rounded-full border-2 border-line-strong border-t-accent" />
              {dict.loading}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

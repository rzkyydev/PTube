import type { ReactNode } from "react";
import {
  ArrowSquareOut,
  CalendarBlank,
  GithubLogo,
  Tag,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeader } from "./SectionHeader";
import type { Release } from "@/lib/release";
import type { Locale } from "@/i18n/config";

type ChangelogProps = {
  dict: Dictionary["changelog"];
  release: Release | null;
  locale: Locale;
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
              className="break-words rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-ink-1"
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
        if (link && /^https?:\/\//i.test(link[2])) {
          return (
            <a
              key={i}
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-2 transition-colors hover:text-ink-1"
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

export function Changelog({ dict, release, locale }: ChangelogProps) {
  const blocks = release?.body ? parseBody(release.body) : [];

  const renderBlocks: ReactNode[] = [];
  blocks.forEach((block, i) => {
    if (block.type === "heading") {
      renderBlocks.push(
        <h3
          key={i}
          className={
            block.level >= 3
              ? "mt-6 text-sm font-bold text-accent first:mt-0"
              : "mt-8 border-t border-line pt-6 font-display text-xl font-bold text-ink-1 first:mt-0 first:border-0 first:pt-0"
          }
        >
          <Inline text={block.text} />
        </h3>,
      );
    } else {
      renderBlocks.push(
        <div key={i} className="mt-2 flex items-start gap-3 text-sm leading-relaxed text-ink-2 sm:text-[0.9375rem]">
          <span aria-hidden="true" className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-accent" />
          <span className="min-w-0 break-words">
            <Inline text={block.text} />
          </span>
        </div>,
      );
    }
  });

  const date = release?.published_at
    ? new Date(release.published_at).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : null;

  return (
    <section id="changelog" className="wrap section-y">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader title={dict.title} desc={dict.desc} />

          {release && (
            <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6">
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink-4">{dict.latest}</p>
                <a
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 font-display text-2xl font-bold text-ink-1 transition-colors hover:text-accent"
                >
                  <Tag size={22} weight="bold" className="shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0 break-words">{release.name || release.tag_name}</span>
                </a>
                {date && (
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-3">
                    <CalendarBlank size={16} weight="bold" aria-hidden="true" />
                    {dict.published} {date}
                  </p>
                )}
              </div>
              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full sm:w-auto lg:self-start"
              >
                <GithubLogo size={16} weight="bold" aria-hidden="true" />
                {dict.viewChangelog}
                <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>

        <div className="min-w-0 rounded-2xl border border-line bg-surface-2 p-5 sm:p-7">
          {release && blocks.length > 0 ? (
            renderBlocks
          ) : (
            // Keadaan kosong: jelaskan apa yang terjadi dan beri jalan keluar.
            <div className="flex flex-col items-start gap-4 py-2">
              <GithubLogo size={26} weight="bold" className="text-ink-4" aria-hidden="true" />
              <p className="max-w-[48ch] text-base leading-relaxed text-ink-2">
                {release ? dict.noNotes : dict.unavailable}
              </p>
              <a
                href={release?.html_url ?? "https://github.com/rzkyydev/PTube/releases"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {dict.linkRelease}
                <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export type Release = {
  tag_name: string;
  name: string;
  // null kalau datanya cuma dari tag (tanpa GitHub Release, jadi tidak ada tanggal).
  published_at: string | null;
  html_url: string;
  body: string | null;
};

const REPO = "rzkyydev/PTube";
const API = `https://api.github.com/repos/${REPO}`;

type GitHubRelease = Release & { draft?: boolean };
type GitHubTag = { name: string };
type ApiResult<T> = { data: T | null; status: number };

async function github<T>(path: string): Promise<ApiResult<T>> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      // GitHub menolak request tanpa User-Agent yang jelas.
      "User-Agent": "ptube-web",
    };
    // Opsional: naikin rate limit GitHub (60/jam per IP -> 5000/jam) kalau env ini di-set di hosting.
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(`${API}${path}`, { headers, next: { revalidate: 3600 } });
    if (!res.ok) {
      // 403/429 = rate limit (umum di IP build bersama), 404 = belum ada Release / repo private.
      console.warn(`[release] GET ${path} -> ${res.status}`);
      return { data: null, status: res.status };
    }
    return { data: (await res.json()) as T, status: res.status };
  } catch (err) {
    console.warn(`[release] GET ${path} gagal:`, err);
    return { data: null, status: 0 };
  }
}

// Daftar tag lewat protokol git (bukan REST API), jadi tidak kena rate limit API GitHub.
async function tagsFromGit(): Promise<string[]> {
  try {
    const res = await fetch(`https://github.com/${REPO}.git/info/refs?service=git-upload-pack`, {
      headers: { "User-Agent": "git/2.43.0" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.warn(`[release] git refs -> ${res.status}`);
      return [];
    }
    const text = await res.text();
    const names = new Set<string>();
    for (const m of text.matchAll(/refs\/tags\/([^\s\0^]+)/g)) names.add(m[1]);
    return [...names];
  } catch (err) {
    console.warn("[release] git refs gagal:", err);
    return [];
  }
}

function versionParts(tag: string): number[] {
  return (tag.match(/\d+/g) ?? []).map(Number);
}

function compareTags(a: string, b: string): number {
  const pa = versionParts(a);
  const pb = versionParts(b);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pb[i] ?? 0) - (pa[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

const isRateLimited = (status: number) => status === 403 || status === 429;

export async function getLatestRelease(): Promise<Release | null> {
  // 1. Release terbaru yang bukan pre-release/draft.
  const latest = await github<Release>("/releases/latest");
  if (latest.data?.tag_name) return latest.data;

  let limited = isRateLimited(latest.status);
  let tagNames: string[] = [];

  if (!limited) {
    // 2. Kalau yang ada cuma pre-release, /releases/latest 404. Ambil yang paling baru dari daftar.
    const list = await github<GitHubRelease[]>("/releases?per_page=10");
    const fromList = list.data?.find((r) => !r.draft && r.tag_name);
    if (fromList) return fromList;
    limited = isRateLimited(list.status);
  }

  if (!limited) {
    // 3. Belum ada GitHub Release sama sekali, cuma git tag.
    const tags = await github<GitHubTag[]>("/tags?per_page=50");
    tagNames = tags.data?.map((t) => t.name) ?? [];
  }

  // 4. API kena rate limit / gagal: baca tag lewat protokol git (tanpa API).
  if (tagNames.length === 0) tagNames = await tagsFromGit();

  const newest = tagNames
    .filter((name) => versionParts(name).length > 0)
    .sort(compareTags)[0];
  if (!newest) return null;

  return {
    tag_name: newest,
    name: newest,
    published_at: null,
    html_url: `https://github.com/${REPO}/releases/tag/${encodeURIComponent(newest)}`,
    body: null,
  };
}

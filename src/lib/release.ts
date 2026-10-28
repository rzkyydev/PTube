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

async function github<T>(path: string): Promise<T | null> {
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
      // Jangan diam-diam: 403/429 = rate limit, 404 = belum ada Release / repo private.
      console.warn(`[release] GET ${path} -> ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[release] GET ${path} gagal:`, err);
    return null;
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

export async function getLatestRelease(): Promise<Release | null> {
  // 1. Release terbaru yang bukan pre-release/draft.
  const latest = await github<Release>("/releases/latest");
  if (latest?.tag_name) return latest;

  // 2. Kalau yang ada cuma pre-release, /releases/latest 404. Ambil yang paling baru dari daftar.
  const list = await github<GitHubRelease[]>("/releases?per_page=10");
  const fromList = list?.find((r) => !r.draft && r.tag_name);
  if (fromList) return fromList;

  // 3. Belum ada GitHub Release sama sekali, cuma git tag: ambil tag dengan versi tertinggi.
  const tags = await github<GitHubTag[]>("/tags?per_page=50");
  const newest = tags?.filter((t) => versionParts(t.name).length > 0).sort((a, b) => compareTags(a.name, b.name))[0];
  if (newest) {
    return {
      tag_name: newest.name,
      name: newest.name,
      published_at: null,
      html_url: `https://github.com/${REPO}/releases/tag/${encodeURIComponent(newest.name)}`,
      body: null,
    };
  }

  return null;
}

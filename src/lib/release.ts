export type Release = {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  body: string | null;
};

const RELEASES_API = "https://api.github.com/repos/rzkyydev/PTube/releases/latest";

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    // Opsional: naikin rate limit GitHub kalau env ini di-set di hosting.
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(RELEASES_API, { headers, next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return (await res.json()) as Release;
  } catch {
    return null;
  }
}

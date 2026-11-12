import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Hanya aktif saat `next dev`, supaya binding Cloudflare bisa dipakai di lokal.
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  experimental: {
    // CSS di-inline ke HTML supaya tidak ada request CSS yang memblokir render.
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/polyfill-lite.js",
    },
  },
  images: {
    // Cache hasil /_next/image 7 hari, bukan default 4 jam.
    minimumCacheTTL: 604800,
  },
  async headers() {
    return [
      {
        // Header keamanan yang aman untuk situs statis ini (tidak butuh nonce/CSP khusus).
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // icon.png tidak di-hash, jadi cache sehari + stale-while-revalidate.
        source: "/icon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

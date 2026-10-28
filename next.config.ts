import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hasil /_next/image (logo navbar) di-cache 7 hari, bukan default 4 jam.
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

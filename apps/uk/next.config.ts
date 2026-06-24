import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  transpilePackages: ["@buudy/ui", "@buudy/shared"],
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    root: path.join(process.cwd(), "../.."),
  },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.trustpilotreview.shop",
      },
      {
        protocol: "https",
        hostname: "img.thesitebase.net",
      },
      {
        protocol: "https",
        hostname: "img.shopbase.com",
      },
      {
        protocol: "https",
        hostname: "assets.thesitebase.net",
      },
      {
        protocol: "https",
        hostname: "images.videowise.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/media/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/products/buudy-led-mask",
        destination: "/products/muuhu-ipl-hair-removal",
        permanent: true,
      },
      {
        source: "/products/buudy-led-mask-2",
        destination: "/products/muuhu-ipl-hair-removal",
        permanent: true,
      },
      {
        source: "/pages/best-led-face-mask-uk",
        destination: "/pages/best-ipl-hair-removal-uk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


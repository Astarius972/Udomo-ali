import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 90],
    minimumCacheTTL: 2678400,
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920],
  },
};

export default nextConfig;

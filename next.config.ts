import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This caches optimized images for 1 year (maximum performance)
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/tharun-kumar-portfolio',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // ✅ This is the magic
  },
};

export default nextConfig;

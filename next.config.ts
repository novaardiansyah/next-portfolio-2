import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'personal-v4.novaardiansyah.id',
      },
      {
        protocol: 'http',
        hostname: '100.108.9.46',
        port: '8000',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me', // For user profile images in testimonials
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com', // For product images
      },
    ],
  },
};

export default nextConfig;

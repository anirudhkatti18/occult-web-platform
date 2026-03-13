import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/occult-web-platform',
  assetPrefix: '/occult-web-platform',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

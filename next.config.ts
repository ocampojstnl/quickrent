import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client'],
  // Disable static optimization for pages that need authentication
  output: 'standalone',
};

export default nextConfig;

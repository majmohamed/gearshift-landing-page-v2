/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  // Conditionally set output to 'export' only for static builds
  ...(process.env.NEXT_BUILD_STATIC === 'true' && { output: 'export' }),
};

module.exports = nextConfig;
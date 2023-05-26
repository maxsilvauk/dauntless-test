/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  reactStrictMode: true,
  experimental: { appDir: true },
};

module.exports = nextConfig;

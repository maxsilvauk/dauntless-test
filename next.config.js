/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.coingecko.com'],
  },
  reactStrictMode: true,
  experimental: { appDir: true },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  eslint: {
    // Allow build to succeed on Vercel; run `npm run lint` locally to fix warnings
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // No redirects needed since homepage is at the root path
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains you're using
    formats: ['image/avif', 'image/webp'],
  },
  // Improve performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in production
  },
  // Enable scroll restoration for better navigation experience
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig 
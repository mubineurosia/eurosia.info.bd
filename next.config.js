/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['eurosia.com.bd'],
  },
  webpack(config) {
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)


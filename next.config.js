/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')()

const nextConfig = removeImports({
  reactStrictMode: true,
   images: {
    domains: ['cdn.sanity.io'],
  },
})

module.exports = nextConfig

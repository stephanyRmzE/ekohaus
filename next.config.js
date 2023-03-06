
/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')()

const nextConfig = removeImports({
  reactStrictMode: true,
   images: {
		domains: ['cdn.sanity.io'],
		loader: 'custom'
	},
  trailingSlash: true,
  useFileSystemPublicRoutes: false,
  webpack(config, options) {
    return config
  },

})

module.exports = nextConfig


const removeImports = require('next-remove-imports')()
module.exports = removeImports({
   images: {
		domains: ['cdn.sanity.io'],
		loader: 'custom'
	},
  trailingSlash: true,
  useFileSystemPublicRoutes: false,
  webpack(config, options) {
    return config
  },
});

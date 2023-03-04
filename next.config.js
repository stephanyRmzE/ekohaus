const removeImports = require('next-remove-imports')()
module.exports = removeImports({
   images: {
		domains: ['cdn.sanity.io'],
		loader: 'custom'
	},
  useFileSystemPublicRoutes: false,
  webpack(config, options) {
    return config
  },
});

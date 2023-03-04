const removeImports = require('next-remove-imports')()
module.exports = removeImports({
   images: {
		domains: ['cdn.sanity.io'],
		loader: 'custom'
	},
  exportTrailingSlash: true,
  useFileSystemPublicRoutes: false,
   async redirects() {
    return [
      {
        destination: '/',
        permanent: true,
      },
    ]
  },
  webpack(config, options) {
    return config
  },
});

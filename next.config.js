const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true
});

module.exports = withNextra({
  basePath: '/docs', // Set the base path for your application
  assetPrefix: '/docs/', // Ensure static assets work under the basePath
  trailingSlash: true, // Add trailing slashes to URLs (optional but recommended for docs)
});

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true
});

module.exports = withNextra({
  output: 'standalone', // Optimized for Vercel
  revalidate: 10, // Enable ISR (regenerates pages every 10 seconds)
});
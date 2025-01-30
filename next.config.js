const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: {
    renderer: 'mathjax',
    strict:false,
  }
});

module.exports = withNextra({
  output: 'standalone',
  revalidate: 60, // Increase ISR interval to reduce rebuild frequency
  experimental: { largePageDataBytes: 300 * 1000 }, // Allow larger MDX pages
});
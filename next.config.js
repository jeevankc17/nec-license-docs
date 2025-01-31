const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: {
    renderer: 'mathjax',
    strict: false,
  },
  unstable_flexsearch: false, // Disable search indexing
  staticImage: false, // Prevent image optimizations
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  experimental: { largePageDataBytes: 300 * 1000 },
  async generateStaticParams() {
    return []; // Stops Next.js from pre-generating all MDX files
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for a long time
          },
        ],
      },
    ];
  },
});

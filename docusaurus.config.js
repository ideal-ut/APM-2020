const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'MIS 382N: Advaned Predictive Modelling',
  tagline: 'Fall 2020',
  url: 'https://ideal-ut.github.io',
  baseUrl: '/APM-2020/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ideal-ut', // Usually your GitHub org/user name.
  projectName: 'APM-2020', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      items: [
        {
          label: "Home",
          position: "left",
          to: "docs/"
        },
        {
          label: "Section A",
          position: "left",
          to: "docs/sec-a/"
        },
        {
          label: "Section B",
          position: "left",
          to: "docs/sec-b/"
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Authors. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'apm',
  tagline: '',
  url: 'https://Ghosh-APM.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Ghosh-APM', // Usually your GitHub org/user name.
  projectName: 'Ghosh-APM.github.io', // Usually your repo name.
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
          to: "docs/2020/"
        },
        {
          label: "2020",
          position: "left",
          items: [
            {
              label: "Section A",
              position: "left",
              to: "docs/2020/sec-a/"
            },
            {
              label: "Section B",
              position: "left",
              to: "docs/2020/sec-b/"
            },
          ]
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

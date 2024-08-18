import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "LBL-RSE",
  tagline:
    "Research Software Engineer group at Lawrence Berkeley National Laboratory",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://lbl-rse.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lbl-rse", // Usually your GitHub org/user name.
  projectName: "lbl-rse.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/lbl-rse/lbl-rse.github.io/blob/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/lbl-rse/lbl-rse.github.io/blob/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: '',
    // Configure the navbar, which is implemented as part of the theme.
    // Reference: https://docusaurus.io/docs/api/themes/configuration#navbar
    navbar: {
      title: "LBL-RSE",
      logo: {
        alt: "LBL-RSE",
        src: "img/logo.svg",
      },
      hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "About",
        },
        { to: "/blog/tags/news", label: "News", position: "left" },
        { to: "/blog/tags/journal", label: "Journal", position: "left" },
        {
          href: "https://us-rse.org/",
          label: "US-RSE",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "About",
              to: "/docs/About/overview",
              title: "An overview of the group",
            },
            {
              label: "News",
              to: "/blog/tags/news",
              title: "Changes to the group",
            },
            {
              label: "Journal",
              to: "/blog/tags/journal",
              title: "Engineering journal",
            },
            {
              label: "Roadmap",
              to: "/docs/About/roadmap",
              title: "Plans for the future",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Lightning Talks",
              href: "https://sites.google.com/lbl.gov/lightningtalkslunch",
              title: "Presentations given by our members",
            },
            {
              label: "Google Group",
              href: "https://groups.google.com/a/lbl.gov/g/lbl-rse/about",
              title: "Our Google Group",
            },
            {
              label: "GitHub",
              href: "https://github.com/lbl-rse",
              title: "Our GitHub organization",
            },
            {
              label: "Slack",
              href: "https://lbl-rse.slack.com",
              title: "Our Slack workspace",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Berkeley Lab (LBL)",
              href: "https://lbl.gov",
              title: "Lawrence Berkeley National Laboratory",
            },
            {
              label: "US-RSE",
              href: "https://us-rse.org/",
              title: "United States Research Software Engineer Association",
            },
            {
              label: "Press",
              href: "https://crd.lbl.gov/news-and-publications/news/2024/us-rse-works-to-bring-research-software-engineers-into-the-spotlight/",
              title: "LBL-RSE in the news",
            },
            {
              label: "Jobs",
              href: "https://jobs.lbl.gov/jobs/search/5751125",
              title: "Software jobs at Berkeley Lab",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lawrence Berkeley National Laboratory`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Reference: https://docusaurus.io/docs/using-plugins
    plugins: [],
    // Reference: https://docusaurus.io/docs/configuration#custom-configurations
    customFields: {},
  } satisfies Preset.ThemeConfig,
  // Reference: https://docusaurus.io/docs/markdown-features/diagrams
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;

# lbl-rse.github.io

This repository contains the source code and content of the [LBL-RSE website](https://lbl-rse.github.io).
The website is built using [Docusaurus](https://docusaurus.io/), a static website generator.
The website is hosted on [GitHub Pages](https://pages.github.com/).

# Table of contents

<!-- TOC -->
* [lbl-rse.github.io](#lbl-rsegithubio)
* [Table of contents](#table-of-contents)
* [Contributing](#contributing)
  * [Local development](#local-development)
    * [Prerequisites](#prerequisites)
    * [Procedure](#procedure)
  * [Code style](#code-style)
  * [Content](#content)
    * [Homepage (`/`)](#homepage-)
    * [About > Overview (`/docs/About/overview`)](#about--overview-docsaboutoverview)
    * [About > Members (`/docs/About/members`)](#about--members-docsaboutmembers)
    * [About > Roadmap (`/docs/About/roadmap`)](#about--roadmap-docsaboutroadmap)
    * [News articles (`/blog/tags/news`)](#news-articles-blogtagsnews)
    * [Journal entries (`/blog/tags/journal`)](#journal-entries-blogtagsjournal)
    * [Footer](#footer)
  * [Colors](#colors)
      * [Light mode](#light-mode)
      * [Dark mode](#dark-mode)
  * [Images](#images)
    * [Logo](#logo)
    * [Image sources](#image-sources)
* [Publishing](#publishing)
<!-- TOC -->

# Contributing

## Local development

### Prerequisites

- [Node.js](https://nodejs.org/) v20 is installed
- You are in the root directory of the repository

### Procedure

Install dependencies.

```shell
npm install
```

Launch the development server.

```shell
npm start
```

That will launch a local development server and open the website in a web browser (usually at `http://localhost:3000`).

## Code style

We use [Prettier](https://prettier.io/) to ensure the code in this repository is in a standard style,
regardless of who wrote the code.

To check whether the code in this repository is in that style, you can run:

```shell
npx prettier . --check
```

If Prettier detects any style issues, it will prompt you to fix the issues by running:

```shell
npx prettier . --write
```

Prettier can check/format files of several types, including: `.md`, `.mdx`, `.js`, `.jsx`, `.ts`, `.tsx`, and `.css`.

## Content

Here's how you can edit the website's content (as opposed to its layout).

> In case you have a question about editing content, you can start a conversation about it on Slack,
> or start a [GitHub Discussion](https://github.com/lbl-rse/lbl-rse.github.io/discussions) about it.

### Homepage (`/`)

You can edit the homepage by editing the file, `src/pages/index.tsx`.

The `index.tsx` file contains references to a JavaScript object named `siteConfig`,
which is defined in the file, `docusaurus.config.ts`.

The `index.tsx` file also contains references to a [React](https://react.dev/) component named `HomepageFeatures`
(among others), which is defined in the file, `src/components/HomepageFeatures/index.tsx`.
React is a JavaScript library commonly used to implement user interfaces.

### About > Overview (`/docs/About/overview`)

You can edit this page by editing the file, `docs/About/overview.md`. This is a Markdown file that has some
YAML-formatted [front matter](https://docusaurus.io/docs/create-doc#doc-front-matter) at the top of it. Front matter
is a snippet of metadata about the page. Many Markdown files in this repository include front matter.

### About > Members (`/docs/About/members`)

You can edit this page by editing the file, `docs/About/members.mdx`. This is an [MDX](https://mdxjs.com/) file, which
is a type of file that can contain both Markdown and [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)). JSX is the
file format in which React user interface elements are typically implemented.

### About > Roadmap (`/docs/About/roadmap`)

You can edit this page by editing the file, `docs/About/roadmap.md`.

### News articles (`/blog/tags/news`)

You can create news articles in the `blog/` directory (you can use the `2024-08-16-welcome` directory and its contents
as an example).

If you include the tag, `news`, in the front matter of the article,
that article will appear in the "News" section.

### Journal entries (`/blog/tags/journal`)

You can create engineering journal articles in the `blog/` directory (you can use the `2024-08-15-website` directory
and its contents as an example).

If you include the tag, `journal`, in the front matter of the article,
that article will appear in the "Journal" section.

### Footer

You can edit the contents of the footer by editing the `footer` property in `docusaurus.config.ts`.

## Colors

There are two color palettes in use on this website: one for light mode and one for dark mode.
Both of them are defined in `src/css/custom.css`

#### Light mode

To come up with the color palette for light mode, we copied the hex code of the `Dark Blue` color (i.e. `#00313C`) from
the [Berkeley Lab Visual Identity website](https://creative.lbl.gov/visual-identity/) and plugged it into
the [Docusaurus color palette generator](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima),
which generated a light mode color palette as a set of CSS style rules.

#### Dark mode

To come up with the color palette for dark mode, we took the same `Dark Blue` color from the other
color palette and plugged it into the [color-hex](https://www.color-hex.com/color/00313c) website, which generated a
list of _tints_ of that color. We chose a nameless tint on the brighter side of the spectrum (i.e. `#B2C1C4`) and
plugged it into
the [Docusaurus color palette generator](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima),
which generated a dark mode color palette as a set of CSS style rules.

## Images

### Logo

Our logo is the [users](https://fontawesome.com/icons/users?f=classic&s=solid) icon
from the Font Awesome Free icon set. ([License](https://fontawesome.com/license/free))

To customize and download it, we found it on [fonticon](https://gauger.io/fonticon/),
set its foreground color to `#00313C` there, selected the download type of `.ico (advanced)`,
then clicked the "Download" button.
That opened the icon in [RealFaviconGenerator.net](https://realfavicongenerator.net/api/favicon_generator),
in which we opted for a background color of `#FFFFFF`. Finally, we downloaded the resulting favicon package
(i.e. ZIP file), which included:

- `favicon.ico`, which we use as our **favicon** (i.e. `static/img/favicon.ico`)
- `safari-pinned-tab.svg`, which we renamed to `logo.svg` and use as our **logo** (i.e. `static/img/logo.svg`)
- Other files, which we do not use

### Image sources

At the time of this writing, we have obtained images from these sources:

- [Undraw](https://undraw.co/search) for illustrations, such as those used on the "Home" page. On Undraw,
  we entered our primary color into the color picker at the top of the search page, searched
  for images by keyword (e.g. "collaboration"), identified images we liked, then downloaded those images in SVG format.
  ([License](https://undraw.co/license))
- [Pexels](https://www.pexels.com/) for placeholder avatars, such as those on the "Members" page.
  ([License](https://www.pexels.com/license/))

In addition, we expect to—at some point—obtain images from these other sources:

- [Unsplash](https://unsplash.com/) for photographs.
- [Illlustrations](https://illlustrations.co/) for illustrations.
- [Placehold.co](https://placehold.co/) for generic placeholder images containing text.

# Publishing

Once you've made the changes you want locally, you can push the branch up to GitHub, create a Pull Request (PR),
and request some reviews of the PR.

Once the branch eventually gets merged into `main`, a GitHub Actions workflow will automatically generate a
production build of the website and deploy it to GitHub Pages.
That GitHub Actions workflow is defined in the file, `.github/workflows/deploy.yaml`. 

## Quick Start

### Download the code

#### Using git

1. On the [Barebones GitHub repo](https://github.com/trevortylerlee/barebones), click the green "Code" button and copy the `HTTPS URL`.
2. Open a terminal and clone the repo to your local machine.

```bash
git clone HTTPS_URL my-website
```

3. Navigate to the repo's directory, install dependencies, and start the development server.

```bash
cd my-website
npm install
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser to view the website.

#### Using a ZIP file

1. On the [Barebones GitHub repo](https://github.com/trevortylerlee/barebones), click the green "Code" button and click the "Download ZIP" link.
2. Extract the zip file to a directory of your choice.
3. Navigate to the directory you extracted the ZIP file into, install dependencies, and start the development server.

```bash
cd my-website
npm install
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser to view the website.

### Configure your development environment

See Astro's official [editor setup documentation](https://docs.astro.build/editor-setup/) on how you can improve the development experience.

### Change the name in `package.json`

```json
{
  "name": "barebones"
}
```

### Configure `astro.config.mjs`

```mjs
export default defineConfig({
  site: "https://barebones.trevortylerlee.com",
});
```

### Configure metadata

1. To change the website's metadata, edit `src/siteConfig.ts`.

```ts
export const SITE: SiteConfiguration = {
  title: "Barebones",
  description:
    "A barebones starter theme. Built with Astro, Tailwind CSS, and Markdown.",
  href: "https://barebones.trevortylerlee.com",
  author: "Trevor Tyler Lee",
  locale: "en-CA",
};
```

2. Customize the links shown in the navigation bar.

```ts
export const NAV_LINKS: NavigationLinks = {
  about: {
    path: "/about",
    label: "About",
  },
  contact: {
    path: "/contact",
    label: "Contact",
  },
};
```

Each link should be an object with a path and a label, and must have a corresponding page in `src/pages`. There must be at least one link or the `Navigation.astro` component will encounter an error.

3. Customize your social media links. Add as many as you'd like.

```ts
export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:trevortylerlee@gmail.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/trevortylerlee",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/boogerbuttcheek",
  },
  reddit: {
    label: "Reddit",
    url: "https://www.reddit.com/u/boogerbuttcheek",
  },
};
```

### Start developing

Open `src/pages/index.astro` in your text editor and start editing. When you save the file, the page in your browser ([http://localhost:4321](localhost:4321)) will update automatically and reflect the changes you make.

### Deploying your site

Read [Astro's documentation](https://docs.astro.build/en/guides/deploy/) for information on deploying your site.

---

## Authoring posts

To create a new post, create a new directory in the `src/content/posts` directory. The name of the directory will be used as the `slug` for the post. Inside that directory, create an `index.md` file. This is where your content will live.

Refer to the schema in `src/content/config.ts` for the available frontmatter options.

```ts
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.coerce.date(),
      image: image()
        .refine((img) => img.width >= 1200, {
          message: "Image should be 1200px × 630px.",
        })
        .optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});
```

### Frontmatter

The frontmatter for a post is defined in the `index.md` file. The frontmatter is written in YAML format and is used to provide metadata about the post.

```
---
title: My First Post
description: This is my first post on my new blog.
publicationDate: 2024-08-26
image: ./my-first-post.jpg
imageAlt: My First Post
---
```

### Open Graph Images

Make sure to co-locate the image you want to use for your Open Graph image with the post. This will ensure that the image will be used for social media previews using the Open Graph protocol.

Images should be 1200px × 630px. For more information, see [this blog post](https://iamturns.com/open-graph-image-size/).

---

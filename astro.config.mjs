import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import siteConfigToolbar from "./site-config-toolbar/integration.ts";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [sitemap(), siteConfigToolbar()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Geist",
      cssVariable: "--font-geist",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: [
              "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
            ],
          },
          {
            weight: "100 900",
            style: "italic",
            src: [
              "@fontsource-variable/geist/files/geist-latin-wght-italic.woff2",
            ],
          },
        ],
      },
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://barebones.trevortylerlee.com",
  vite: {
    plugins: [tailwindcss()],
  },
});

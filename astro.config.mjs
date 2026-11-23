import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://albertozaranza.github.io",
  base: "/portfolio",
  trailingSlash: "ignore",
  integrations: [sitemap({ filter: (page) => page.endsWith("/") })],
  // Old routes from the previous version of the site now live as sections on the home page.
  redirects: {
    "/cv": "/portfolio/#experience",
    "/projects": "/portfolio/#work",
  },
  prefetch: false,
});

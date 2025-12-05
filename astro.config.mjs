// @ts-check
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.inferno.wtf/",
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: netlify(),
});

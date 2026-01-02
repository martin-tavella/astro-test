// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      SCORE_API_ENDPOINT: envField.string({context: "server", access: "public"})
    }
  },

  adapter: netlify()
});
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    mdsvex({ extensions: [".md"] }),
    sveltekit({
      extensions: [".svelte", ".md"],
      preprocess: [vitePreprocess()],
      adapter: adapter({
        pages: "build",
        assets: "build",
        precompress: false,
        strict: true,
        fallback: "404.html",
      }),

      version: {
        // Poll for new deploys so long-lived tabs upgrade proactively instead of
        // only recovering reactively after a failed navigation.
        pollInterval: 300_000,
      },
      paths: { base: process.argv.includes("dev") ? "" : "/2027" },
    }),
  ],
  server: { port: 5181, strictPort: true },
});

import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex, type MdsvexOptions } from "mdsvex";
import { createHighlighter } from "shiki";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const mdsvexOptions: MdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await createHighlighter({
        themes: ["poimandres"],
        langs: ["javascript", "typescript"],
      });
      await highlighter.loadLanguage("javascript", "typescript");
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang: lang ?? "text",
          theme: "poimandres",
        }),
      );
      return `{@html \`${html}\` }`;
    },
  },
};

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: [".svelte", ".md"],
      preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
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

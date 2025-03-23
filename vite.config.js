import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import inject from "@rollup/plugin-inject";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pages = {
  index: resolve(__dirname, "src/index.html"),
  about: resolve(__dirname, "src/pages/about.html"),
  contact: resolve(__dirname, "src/pages/contact.html"),
};

export default defineConfig({
  root: "src",

  base: "./",

  build: {
    outDir: "../dist",
    assetsDir: "assets",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      input: pages,
      output: {
        entryFileNames: "assets/js/[name].[hash].js",
        chunkFileNames: "assets/js/[name].[hash].js",
        assetFileNames: "assets/[ext]/[name].[hash].[ext]",
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  server: {
    port: 3000,
    open: "/index.html",
    hmr: true,
  },

  plugins: [
    inject({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
      "@js": resolve(__dirname, "src/assets/js"),
      "@css": resolve(__dirname, "src/assets/css"),
    },
  },
});

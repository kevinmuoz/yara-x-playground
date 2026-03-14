import { defineConfig } from "vite";
import os from "node:os";
import path from "node:path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  worker: {
    format: "es",
  },
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, ".."),
        path.resolve(__dirname, "node_modules"),
        path.resolve(os.homedir(), "node_modules"),
      ],
    },
  },
  plugins: [
    /*
    for generate html w bundle stats:
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),*/
  ],
});

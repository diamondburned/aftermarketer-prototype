import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA as vitePWA } from "vite-plugin-pwa";
import type * as vite from "vite";
import * as crypto from "crypto";
import * as path from "path";
import * as fs from "fs/promises";
import sveltePreprocess from "svelte-preprocess";
import manifest from "./src/manifest.json";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  root: path.resolve(__dirname, "src"),
  envPrefix: "APP_",
  publicDir: "../public",
  server: {
    port: 5000,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  // https://github.com/vitejs/vite/issues/7385#issuecomment-1286606298
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src/"),
    },
  },
});

async function hash(filename: string): Promise<string> {
  const file = await fs.readFile(filename);
  const hash = crypto.createHash("sha256");
  hash.update(file);
  return hash.digest("base64");
}

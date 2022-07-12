import { fileURLToPath, URL } from "url";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "./lib",
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "gvcl",
      fileName: (format) => `gvcl.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
        typescript({
          tsconfig: "./tsconfig.json",
          include: ["src/components/**/*"],
          declaration: true,
          declarationDir: "lib/types",
        }),
      ],
    },
  },
});

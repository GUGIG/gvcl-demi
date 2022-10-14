import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "./lib",
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "gvcl",
      fileName: (format) => `gvcl.${format}.js`,
    },
    rollupOptions: {
      external: ["vue-demi"],
      plugins: [
        peerDepsExternal(),
        typescript({ include: ["src/components/**/*"] }),
      ],
    },
  },
});

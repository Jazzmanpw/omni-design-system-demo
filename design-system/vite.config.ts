import { defineConfig, mergeConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export function designSystemExtendConfig(config: UserConfigExport) {
  return mergeConfig(config, { plugins: [svgr()] });
}

// https://vitejs.dev/config/
export default designSystemExtendConfig(
  defineConfig({
    plugins: [react()],
  })
);

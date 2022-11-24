import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { designSystemExtendConfig } from "./design-system/vite.config";

// https://vitejs.dev/config/
export default designSystemExtendConfig(
  defineConfig({
    plugins: [react()],
  })
);

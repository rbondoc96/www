import pluginReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  test: {
    environment: "jsdom",
    include: ["__tests__/**/*.spec.{ts,tsx}"],
    setupFiles: [new URL("./__tests__/setup.ts", import.meta.url).pathname],
  },
});

/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, 
  },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["tests/unitarie/**", "tests/integration/**"],
    exclude: ["e2e/**", "node_modules/**", "dist/**", "build/**"],
  },
});

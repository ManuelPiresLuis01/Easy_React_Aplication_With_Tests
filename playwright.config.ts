import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60 * 1000,
  use: {
    headless: true,
    baseURL: "http://localhost:5173",
    viewport: { width: 1480, height: 520 },
  },
  workers: 1,
});

import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: "http://localhost:5173", 
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});

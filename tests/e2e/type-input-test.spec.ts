import { test, expect } from "@playwright/test";

test.describe("Type Input Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the input field with correct placeholder", async ({
    page,
  }) => {
    const inputField = page.locator('input[placeholder="Add a new task"]');
    await expect(inputField).toBeVisible();
  });
});

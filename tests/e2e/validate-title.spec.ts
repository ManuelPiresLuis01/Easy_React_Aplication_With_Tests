import {test, expect} from "@playwright/test";

test.describe("Validate Title Component", () => {
  test("should render the title with correct text", async ({ page }) => {
    await page.goto("/");
    const titleElement = page.getByText("Task Lisk");
    await expect(titleElement).toBeVisible();
  });
});
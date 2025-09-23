import { test, expect } from "@playwright/test";

test.describe("Render task", () => {
  test("should render 1 task", async ({ page }) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Enter a task");
    await input.fill("New Task 1");
    await page.getByRole("button").click();

    const tasks = page.locator("div[class*='task']");
    await tasks.first().waitFor();
    await expect(tasks).toHaveCount(1);
  });

  test("should render 2 tasks", async ({ page }) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Enter a task");
    await input.fill("New Task 1");
    await page.getByRole("button").click();
    await input.fill("New Task 2");
    await page.getByRole("button").click();

    const tasks = page.locator("div[class*='task']");
    await tasks.first().waitFor();
    await expect(tasks).toHaveCount(2);
  });

  test("should render 10 tasks", async ({ page }) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Enter a task");
    const tasks = page.locator("div[class*='task']");

    for (let i = 1; i <= 10; i++) {
      await input.fill(`New Task ${i}`);
      await page.getByRole("button").click();
    }

    await tasks.first().waitFor();
    await expect(tasks).toHaveCount(10);
  });

  test("should render 20 tasks", async ({ page }) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Enter a task");
    const tasks = page.locator("div[class*='task']");

    for (let i = 1; i <= 20; i++) {
      await input.fill(`New Task ${i}`);
      await page.getByRole("button").click();
    }

    await tasks.first().waitFor();
    await expect(tasks).toHaveCount(20);
  });
});

import { test, expect } from "@playwright/test";

test.describe("Delete test", () => {
  test("should delete a task by id /1", async ({ page }) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Enter a task");
    const addButton = page.getByRole("button");

    await input.fill("Task A");
    await addButton.click();
    await input.fill("Task B");
    await addButton.click();
    await input.fill("Task A");
    await addButton.click();
    await input.fill("Task B");
    await addButton.click();
    await input.fill("Task A");
    await addButton.click();
    await input.fill("Task B");
    await addButton.click();

    const tasks = page.locator("div[class*='task']");
    await expect(tasks).toHaveCount(6);

    await tasks.nth(0).locator("i").click();

    await expect(tasks).toHaveCount(5);

    await tasks.nth(0).locator("i").click();
    await tasks.nth(0).locator("i").click();
    await tasks.nth(0).locator("i").click();

    await expect(tasks).toHaveCount(2);
  });

  test("should delete a task by id /2 ", async ({ page }) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Enter a task");
    const addButton = page.getByRole("button");

    await input.fill("Task A");
    await addButton.click();
    await input.fill("Task B");
    await addButton.click();
    await input.fill("Task A");
    await addButton.click();
    await input.fill("Task B");
    await addButton.click();
    await input.fill("Task A");
    await addButton.click();
    await input.fill("Task B");
    await addButton.click();

    const tasks = page.locator("div[class*='task']");
    await expect(tasks).toHaveCount(6);

    await tasks.nth(0).locator("i").click();

    await expect(tasks).toHaveCount(5);

    await tasks.nth(0).locator("i").click();
    await tasks.nth(0).locator("i").click();
    await tasks.nth(0).locator("i").click();

    await expect(tasks).toHaveCount(2);
  });
});

import { test, expect } from "@playwright/test";

test("should render 1 task", async ({ page }) => {
  await page.goto("/");

  const input = page.getByPlaceholder("Enter a task");

  await input.fill("New Task 1");
  await page.getByRole("button").click();

  const tasks = page.locator("div[class*='task']");
  expect(tasks).toHaveCount(1);
});

test("should render 2 task", async ({ page }) => {
  await page.goto("/");

  const input = page.getByPlaceholder("Enter a task");

  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 2");
  await page.getByRole("button").click();

  const tasks = page.locator("div[class*='task']");
  expect(tasks).toHaveCount(2);
});

test("should render 10 task", async ({ page }) => {
  await page.goto("/");

  const input = page.getByPlaceholder("Enter a task");

  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();
  await input.fill("New Task 1");
  await page.getByRole("button").click();

  const tasks = page.locator("div[class*='task']");
  expect(tasks).toHaveCount(10);
});

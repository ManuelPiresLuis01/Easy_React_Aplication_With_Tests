import { describe, test, expect } from "vitest";
import Tasks from "../../src/mock";
import { AddTasks } from "../../src/utils/addTasks/addTasks";

let description = "New Task";

describe("AddTasks function", () => {
  test("should add a new task to the tasks array", () => {
    const updatedTasks = AddTasks(description, Tasks());
    expect(updatedTasks.length).toBe(Tasks().length + 1);
  });
  test("should add a task with the correct description", () => {
    const updatedTasks = AddTasks(description, Tasks());
    const addedTask = updatedTasks.find(
      (task) => task.description === description
    );
    expect(addedTask).toBeDefined();
    expect(addedTask?.description).toBe(description);
  });

  test("should not add a task with an empty description", () => {
    description = "";
    const updatedTasks = AddTasks(description, Tasks());
    expect(updatedTasks.length).toBe(Tasks().length);
  });
});

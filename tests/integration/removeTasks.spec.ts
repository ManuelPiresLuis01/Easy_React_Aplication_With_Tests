import { describe, test, expect } from "vitest";
import Tasks from "../../src/mock";
import { RemoveTask } from "../../src/utils/removeTasks/removeTasks";

describe("RemoveTask function", () => {
  test("should remove the task with the specified id", () => {
    const initialTasks = Tasks();
    const idToRemove = "1";
    const updatedTasks = RemoveTask(idToRemove, initialTasks);
    expect(updatedTasks).toEqual([]);
  });

  test("should not modify the tasks if the id does not exist", () => {
    const initialTasks = Tasks();
    const idToRemove = "non-existent-id";
    const updatedTasks = RemoveTask(idToRemove, initialTasks);
    expect(updatedTasks).toEqual(initialTasks);
  });
});

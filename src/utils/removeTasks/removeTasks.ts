import type { TaskProps } from "../../types/components-type/index.type";

export function RemoveTask(id: string, TasksStorage: TaskProps[]): TaskProps[] {
  const tasks = TasksStorage;
  const updated = tasks.filter((task) => task.id !== id);

  tasks.length = 0;
  tasks.push(...updated);

  return tasks;
}

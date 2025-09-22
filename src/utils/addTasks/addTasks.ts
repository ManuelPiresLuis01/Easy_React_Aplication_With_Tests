import type { TaskProps } from "../../types/components-type/index.type";

export function AddTasks(
  description: string,
  TasksStorage: TaskProps[]
): TaskProps[] {
  if(!description || description.trim() === "") return TasksStorage;
  const newTask: TaskProps = {
    id: crypto.randomUUID(),
    description,
  };

  const tasks = TasksStorage;
  tasks.push(newTask);
  return tasks;
}

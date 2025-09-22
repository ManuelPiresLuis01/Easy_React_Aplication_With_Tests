import type { TaskProps } from "../types/components-type/index.type";

let tasks: TaskProps[] = [];

export default function TasksStorage(): TaskProps[] {
  return tasks;
}

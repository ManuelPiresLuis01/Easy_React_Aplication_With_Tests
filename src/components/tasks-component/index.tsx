import Task from "../task-component";
import TasksStorage from "../../database/tasks-storage";
import { useState, useEffect } from "react";

export default function TasksField() {
  const [tasks, setTasks] = useState(TasksStorage());

  useEffect(() => {
    setTasks([...TasksStorage()]);
  },[tasks]);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} description={task.description} />
      ))}
    </>
  );
}

import Style from "./index.module.css";
import removeSpaces from "../../utils/removeSpaces/removeSpaces";
import { useState } from "react";
import { AddTasks } from "../../utils/addTasks/addTasks";
import TasksStorage from "../../database/tasks-storage";

export default function InputZone() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (removeSpaces(inputValue) === "") return;
    AddTasks(inputValue, TasksStorage());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmitTask} className={Style.inputZone}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

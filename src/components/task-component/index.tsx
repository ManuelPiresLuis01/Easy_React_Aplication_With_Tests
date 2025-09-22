import Style from "./index.module.css";
import type { TaskProps } from "../../types/components-type/index.type";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RemoveTask } from "../../utils/removeTasks/removeTasks";
import TasksStorage from "../../database/tasks-storage";
export default function Task({ description, id }: TaskProps) {
  const handleIconDeleteTask = () => {
    RemoveTask(id, TasksStorage());
  };

  return (
    <div key={id} title={description} className={Style.task}>
      <p>{description}</p>
      <i onClick={handleIconDeleteTask} className={Style.icon}>
        <IoMdCloseCircleOutline />
      </i>
    </div>
  );
}

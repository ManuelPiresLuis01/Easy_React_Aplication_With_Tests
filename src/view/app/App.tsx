import InputZone from "../../components/input-component";
import Title from "../../components/title-component";
import TasksField from "../../components/tasks-component";
import Style from "./index.module.css";

function App() {
  return (
    <>
      <div className={Style.app}>
        <Title />
        <TasksField/>
        <InputZone />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState([]);
  fetch("http://localhost:5000/tasks").then(async function (res) {
    const json = await res.json();
    setTask(json.tasks);
  });

  return (
    <div>
      <CreateTask />
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;

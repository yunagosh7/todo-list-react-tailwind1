import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import { TaskModel } from "./models/TaskModel";
import React, { useState } from "react"

function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const task: TaskModel = new TaskModel(
    "title of the task",
    "description of the first class",
    true
  );
  return (
    <>
      <Form />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;

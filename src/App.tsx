import './App.css'
import Form from './components/Form'
import Task from './components/Task'
import { TaskModel } from './models/TaskModel'

function App() {

  const task: TaskModel = new TaskModel("title of the task", "description of the first class", true)
  return (
    <>
      <Task task={task} />
    </>
  )
}

export default App

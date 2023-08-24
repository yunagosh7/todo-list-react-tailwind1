import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { TaskModel } from '../models/TaskModel'

interface TodoContextType {
  tasks: TaskModel[];
  addTask: (task: TaskModel) => void;
  updateTask: (id: string, title: string, desc: string) => void;
  changeTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: FC<{children: ReactNode}> = ({children}) => {
  const [tasks, setTasks] = useState<TaskModel[]>([
   new TaskModel("0", "title of the task", "description of the task", false)
  ]);

  const addTask = (task: TaskModel) => {
    setTasks([...tasks, task])
  }

  const updateTask = (id: string, title: string, desc: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.title = title;
        task.desc = desc;
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  const changeTaskStatus = (id: string) => {
    const updatedTask = tasks.map(task => {
      if(task.id === id) {
        task.changeStatus();
      }
      return task
    })
    setTasks(updatedTask)
  }

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  return <TodoContext.Provider value={{
    tasks,
    addTask,
    updateTask,
    changeTaskStatus,
    deleteTask
    }}>
{children}
</TodoContext.Provider>
} 



const useTaskContext = () => {
  const context = useContext(TodoContext);
  if(!context) {
    throw new Error("useTodoContext debe ser utilizado dentro de un TodoProvider")
  }
  return context;
}
// export function TodoProvider(props) {
//   const [tasks, setTasks] = useState<TaskModel[]>([])

// }

export {
  TodoProvider,
  useTaskContext
}
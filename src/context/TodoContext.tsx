import { FC, ReactNode, createContext, useState } from 'react'
import { TaskModel } from '../models/TaskModel'

const TodoContext = createContext<TaskModel | null>(null);

const TodoProvider: FC<ReactNode> = ({children}) => {
  const [tasks, setTasks] = useState<TaskModel[]>([
    {
      title: "First task",
      desc: "Description of the first task",
      completed: false
    }
  ]);

  return <TodoContext.Provider value={{
    tasks
    }}>
{children}
</TodoContext.Provider>
} 

// export function TodoProvider(props) {
//   const [tasks, setTasks] = useState<TaskModel[]>([])

// }
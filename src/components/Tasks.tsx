import React, { FC } from 'react'
import { TaskModel } from '../models/TaskModel'

interface TasksProps{
  tasks: Array<TaskModel>;
  addTask: (task: TaskModel) => void;
  removeTask: (task: TaskModel) => void;
  updateTask: (task: TaskModel) => TaskModel;
  getTasks: () => Array<TaskModel>;
}

const Tasks: FC<TasksProps> = () => {
  
  return (
    <div>
      
    </div>
  )
}

export default Tasks
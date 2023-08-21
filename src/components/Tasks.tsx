import React, { FC, useState } from 'react'
import { TaskModel } from '../models/TaskModel'
import Task from './Task';


interface TasksProps {
  tasks: Array<TaskModel>;
}
const Tasks: FC<TasksProps> = ({tasks: Array<TaskModel>}) => {

  return (
    <div>
      {tasks.map((task: TaskModel) => (
        <Task task={task}
        />
      ))}
    </div>
  )
}

export default Tasks
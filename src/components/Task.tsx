import React, { FC, useState } from 'react'
import { TaskModel } from '../models/TaskModel'
import { Dialog, DialogContent, DialogContentText, TextField, DialogActions, Button, DialogTitle } from '@mui/material'

// Define the props of the functional component
interface TaskProps {
  task: TaskModel
}


const Task: FC<TaskProps> = ({task}): JSX.Element | null => {
  const [open, setOpen] = useState(false)
  if(!task) {
    return null
  }


  const handleUpdate = () => {
    setOpen(false)
  }

  const handleClick = () => {
    setOpen(true);
  }

  return (
    <>
    <div className={`w-96 bg-slate-700  rounded-sm ${task.completed ? "bg-green-800" : "bg-red-900"}`}>
      <h3 className='text-lg text-white font-bold text-center'>{task.title}</h3>
      <p className='text-white text-center'>{task.desc}</p>
      <p className='text-white text-center'>{task.completed ? "Completada" : "Sin hacer"}</p>
      <button onClick={handleClick} className=' w-full bg-blue-900 py-2 rounded-sm text-white font-bold'>Update</button>
    </div>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Update the task</DialogTitle>
      <DialogContent>
      <DialogContentText
        color={'black'}
        fontSize={18}
      >
        <span className='font-bold'>Title: </span> 
          {task.title}
        </DialogContentText>
        <DialogContentText 
        fontSize={18}
        color={'black'}>
          <span className='font-bold'>Description: </span>
          {task.desc}
        </DialogContentText>
        <TextField 
        margin='dense'
        id='task-title'
        label='Task title'
        type='text'
        fullWidth
        variant='standard'
        />
        
        <TextField 
        margin='dense'
        id='task-title'
        label='Task description'
        type='text'
        fullWidth
        variant='standard'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogActions>
    </Dialog>
    </>
  )
}

export default Task
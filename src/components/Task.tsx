import React, {  useState } from 'react'
import { TaskModel } from '../models/TaskModel'
import { Dialog, DialogContent, DialogContentText, TextField, DialogActions, Button, DialogTitle } from '@mui/material'
import { useTaskContext } from '../context/TodoContext'

// Define the props of the functional component
type TaskProps = {
  task: TaskModel
}


const Task = ({task}: TaskProps) => {
  const [open, setOpen] = useState(false)
  const [taskTitle, setTaskTitle] = useState(task.title)
  const [taskDesc, setTaskDesc] = useState(task.desc)

  const todoContext = useTaskContext()

  const updateTask = todoContext.updateTask;
  const changeTaskStatus = todoContext.changeTaskStatus;
  const deleteTask = todoContext.deleteTask;


  const handleUpdate = () => {
    setOpen(false)
    
    
    updateTask(task.id, taskTitle, taskDesc)
  }

  const handleClick = () => {
    setOpen(true);
  }

  const handleStatusBtnClick = () => {
    changeTaskStatus(task.id)
  }

  const handleDeleteBtnClick = () => {
    deleteTask(task.id)
  }

  return (
    <>
    <div className={`w-full  bg-slate-700  rounded-sm ${task.completed ? "bg-green-800" : "bg-red-900"}`}>
      <h3 className='text-lg text-white font-bold text-center'>{task.title}</h3>
      <p className='text-white text-center'>{task.desc}</p>
      <button onClick={handleStatusBtnClick} className={`w-full ${task.completed ? 'bg-green-500' : 'bg-yellow-500'} py-2 rounded-sm text-white`}>{task.completed ? "Completa" : "Incompleta"}</button>
      <button onClick={handleClick} className=' w-full bg-blue-900 py-2 rounded-sm text-white font-bold'>Update</button>
      <button onClick={handleDeleteBtnClick} className='w-full bg-red-500 py-2 rounded-sm text-white'>Delete task</button>
    </div>
    {/* <Card sx={{minWidth:275, maxWidth: 350, margin:1}}>
      <CardContent>
        <Typography variant='h5' component="div">
          Título de la tare
        </Typography>
      </CardContent>

    </Card> */}
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
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value)
        }}
        />
        
        <TextField 
        margin='dense'
        id='task-desc'
        label='Task description'
        type='text'
        fullWidth
        variant='standard'
        value={taskDesc}
        onChange={(e) => {
          setTaskDesc(e.target.value)
          
        }}
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
import { TaskModel } from '../models/TaskModel'
import Task from './Task';
import { useTaskContext } from '../context/TodoContext';

// type Props = {
//   tasks: TaskModel[]
// }
// const Tasks = ({tasks}: Props) => {


const Tasks = () => {

  const todoContext = useTaskContext()
  
  const tasks = todoContext.tasks;

return (
    <div className='flex flex-col mt-4 w-full px-2 md:grid md:grid-cols-2 gap-2 md:flex-row md:flex-wrap lg:grid-cols-3'>
      {tasks.map((task: TaskModel) => (
        <Task task={task}
        />
      ))}
    </div>
  )
}

export default Tasks
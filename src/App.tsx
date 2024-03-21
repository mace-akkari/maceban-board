import './App.css'
import TaskCard from './components/TaskCard'
import { Task } from './utils/data-tasks';
function App() {
  const task: Task = {
    title: 'A task',
    id: 'BUS-1',
    points:  5,
  }

  return (
    <>
    <TaskCard task={task} />
    </>
  )
}

export default App

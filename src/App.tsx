import './App.css'
import TaskCard from './task-card'

function App() {
const title = 'A task'
const id = 'BUS-1'
const points = 5

  return (
    <>
    <TaskCard title={title} id={id} points={points} />
    </>
  )
}

export default App

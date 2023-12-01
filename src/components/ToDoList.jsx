import { useState } from "react"
import ToDoCard from "./ToDoCard"

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { task: "task1", id: 1 },
    { task: "task2", id: 2 },
    { task: "task3", id: 3 },
  ])

  return (
    <>
      <h2>This is the to-do list</h2>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{<ToDoCard task={task.task} />}</li>
        })}
      </ul>
    </>
  )
}

export default ToDoList

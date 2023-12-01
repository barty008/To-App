import { useState } from "react"
import ToDoCard from "./ToDoCard"
import FormInput from "./Form"

const ToDoList = (event) => {
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
          return <li key={task.id}>{<ToDoCard task={task} />}</li>
        })}
      </ul>
      <FormInput />
    </>
  )
}

export default ToDoList

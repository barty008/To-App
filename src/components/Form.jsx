import { useState } from "react"

const FormInput = (addTask) => {
  const [taskInput, setTasksInput] = useState("")

  const handleInputChange = (event) => {
    setTasksInput(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // addTask(taskInput)
    console.log(addTask.task)
    setTasksInput("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">
        <input
          type="text"
          placeholder="Task to add"
          value={taskInput}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add a task</button>
    </form>
  )
}

export default FormInput

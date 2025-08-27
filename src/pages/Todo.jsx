import '../css/Todo.css'
import { isValidElement, useState } from 'react'

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [priorityLevel, setPriorityLevel] = useState(0)
  const [editingId, setEditingId] = useState(null) //tracks id of task being edited
  const [editValue, setEditValue] = useState('')

  const priorityLabels = ['!', '!!', '!!!']
  const priorityClasses = ['low-priority', 'medium-priority', 'high-priority']

  const handleInputChange = (element) => {
    setInputValue(element.target.value) 
  }

  const changePriority = (element) => {
    element.preventDefault() //prevents <form> from submitting 
    setPriorityLevel((priorityLevel + 1) % 3) //cycles from 0-2 restarts after 2
  }

  const handleEditInputChange = element => {
    setEditValue(element.target.value)
  }

  const editTask = (id) => {
    if(editingId === id) {
      setTasks(tasks.map(task => (
        task.id === id ? { ...task, text: editValue } : task
      )))
      setEditingId(null)
    } else {
      const taskToEdit = tasks.find(task => task.id === id)
      setEditValue(taskToEdit.text)
      setEditingId(id)
    }
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id ))
  }

  const addTask = (element) => {
    element.preventDefault()
    if(inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        priorityLevel: priorityLevel,
        completed: false
      }
      setTasks([...tasks, newTask])
      setInputValue('')
      setPriorityLevel(0)
    }
  }

  return (
    <div className="todo">
      <h1>Todo List</h1>

      <main className='todo-container'>

        <form onSubmit={addTask} className='add-task-container'>
          <input 
          type="text" 
          placeholder='Task...'
          value={inputValue}
          onChange={handleInputChange}
          />
          <div className='button-container'>
            <button className='priority-button' onClick={changePriority}>
              {priorityLabels[priorityLevel]}
            </button>
            <button className='add-task-button'>+</button>
          </div>
        </form>


        <ul className='todo-list'>
          
          {tasks.map(task => (

            <li key={task.id} className={priorityClasses[task.priorityLevel]}>

              <span className='priority-indicator'>{priorityLabels[task.priorityLevel]}</span>
              {editingId === task.id ? ( //if currently editing display input
                <input 
                  type="text"
                  className='edit-input'
                  value={editValue}
                  onChange={handleEditInputChange}
                  autoFocus
                />
              ) : ( //otherwise display text
                <span className='task-text'>{task.text}</span>
              )

              }
              <div className='task-buttons-container'>
                <button className='edit-button'
                onClick={() => editTask(task.id)}>{editingId === task.id ? '✔' : '✎'}</button>
                <button className='delete-button'
                onClick={() => removeTask(task.id)}>X</button>
              </div>

            </li>
          ))

          }
        </ul>
      </main>
    </div>
  )
}

export default Todo

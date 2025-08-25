import '../css/Todo.css'

const Todo = () => {
  return (
    <div className="todo">
      <h1>Todo List</h1>
      <main className='todo-container'>
        <form action="submit" className='add-task-container'>
          <input type="text" placeholder='Task...'/>
          <div className='button-container'>
            <button className='priority-button'>!</button>
            <button className='add-task-button'>+</button>
          </div>
        </form>
        <ul className='todo-list'></ul>
      </main>
    </div>
  )
}

export default Todo

export function TodoNote({ info, toggleTodo }) {
  const { title, todos } = info

  return (
    <React.Fragment>
      <h2 className="note-title">{title}</h2>
      <ul className="note-todo">
        {todos.map(todo => {
          const todoClass = todo.isDone ? 'doto-done' : ''
          return (
            <li key={todo.id}>
              <label onClick={ev => ev.stopPropagation()}>
                <input
                  onClick={ev => ev.stopPropagation()}
                  onChange={() => toggleTodo(todo.id)}
                  type="checkbox"
                  checked={todo.isDone}
                />
                <span className={todoClass}>{todo.txt}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

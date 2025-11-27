import { noteService } from '../services/note.service.js'
import { Loader } from '../../../cmps/Loader.jsx'

const { useParams, useNavigate, useOutletContext } = ReactRouterDOM
const { useState, useEffect } = React

export function OpenNote() {
  const { noteId } = useParams()
  const [note, setNote] = useState(null)
  const navigate = useNavigate()
  const { saveNote } = useOutletContext()

  useEffect(() => {
    loadNote()
  }, [noteId])

  function loadNote() {
    noteService.get(noteId).then(setNote).catch(console.log)
  }

  function onBack() {
    navigate('/note')
  }

  function onSaveNote(ev) {
    ev.preventDefault()
    saveNote(note)
    onBack()
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break

      case 'checkbox':
        value = target.checked
        break
    }
    setNote(prevNote => ({
      ...prevNote,
      info: { ...prevNote.info, [field]: value },
    }))
  }

  function handleTodoChange({ target }) {
    const todoId = target.name
    let value = target.value

    setNote(prevNote => {
      const todos = prevNote.info.todos.map(todo =>
        todo.id === todoId ? { ...todo, txt: value } : todo
      )

      return {
        ...prevNote,
        info: { ...prevNote.info, todos },
      }
    })
  }
  if (!note) return
  return (
    <div onClick={onBack} className="note-black-screen">
      <form
        onSubmit={onSaveNote}
        onClick={ev => ev.stopPropagation()}
        className="open-note"
      >
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          value={note.info.title}
        />
        {note.type === 'text' && (
          <input
            onChange={handleChange}
            type="text"
            placeholder="Take a note..."
            name="txt"
            value={note.info.txt}
          />
        )}
        {note.type === 'photo' && <img src={note.info.url} />}
        {note.type === 'todo' && (
          <div className="todo-input-container">
            <ul className="todo-preview">
              {note.info.todos.map((todo, idx) => (
                <li key={todo.id}>
                  <input
                    name={todo.id}
                    onChange={handleTodoChange}
                    className="todo-input"
                    type="text"
                    placeholder="Add a todo..."
                    value={todo.txt}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {note.type === 'video' && (
          <video className="video-input" controls>
            <source src={note.info.url} type="video/mp4" />
          </video>
        )}

        <button style={{ display: 'none' }} />
      </form>
    </div>
  )
}

import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React

export function AddNote({ saveNote }) {
  const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())
  const [todoTxt, setTodoTxt] = useState('')
  const [isFullInput, setIsFullInput] = useState(false)

  function onSaveNote(ev) {
    ev.preventDefault()
    saveNote(noteToAdd)
    toggleFullAddNote()
  }

  function toggleFullAddNote() {
    setIsFullInput(prevState => !prevState)
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
    setNoteToAdd(prevNote => ({
      ...prevNote,
      info: { ...prevNote.info, [field]: value },
    }))
  }

  function onChangeNoteType(type) {
    setNoteToAdd(noteService.getEmptyNote(type))
  }

  function onImgUpload(ev) {
    const file = ev.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = e => {
      const base64Url = e.target.result

      setNoteToAdd(prevNote => ({
        ...prevNote,
        info: {
          ...prevNote.info,
          url: base64Url,
        },
      }))
    }

    reader.readAsDataURL(file)
  }

  function addTodo() {
    setNoteToAdd(prevNote => ({
      ...prevNote,
      info: {
        ...prevNote.info,
        todos: [...prevNote.info.todos, noteService.getEmptyTodo(todoTxt)],
      },
    }))

    setTodoTxt('')
  }

  return (
    <div className="add-note">
      <form onSubmit={onSaveNote}>
        {!isFullInput ? (
          <input
            onClick={toggleFullAddNote}
            type="text"
            placeholder="Take a note..."
          />
        ) : (
          <div className="full-note-input">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Title"
              name="title"
            />
            {noteToAdd.type === 'text' && (
              <input
                onChange={handleChange}
                type="text"
                placeholder="Take a note..."
                name="txt"
              />
            )}
            {noteToAdd.type === 'photo' && (
              <input type="file" accept="image/*" onChange={onImgUpload} />
            )}
            {noteToAdd.type === 'todo' && (
              <div className="todo-input-container">
                <input
                  className="todo-input"
                  type="text"
                  placeholder="Add a todo..."
                  value={todoTxt}
                  onChange={ev => setTodoTxt(ev.target.value)}
                  onKeyDown={ev => {
                    if (ev.key === 'Enter') {
                      ev.preventDefault()
                      addTodo()
                    }
                  }}
                />
                <button type="button" onClick={onSaveNote}>
                  Done!
                </button>

                <ul className="todo-preview">
                  {noteToAdd.info.todos.map((todo, idx) => (
                    <li key={idx}>{todo.txt}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="input-features">
              <img
                onClick={() => onChangeNoteType('text')}
                src="assets/img/note/text.png"
              />
              <img
                onClick={() => onChangeNoteType('photo')}
                src="assets/img/note/photo.png"
              />
              <img
                onClick={() => onChangeNoteType('todo')}
                src="assets/img/note/todo.png"
              />
            </div>

            <button style={{ display: 'none' }} />
          </div>
        )}
      </form>
    </div>
  )
}

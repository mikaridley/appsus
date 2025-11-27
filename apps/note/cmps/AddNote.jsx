import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React

export function AddNote({ saveNote }) {
  const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())
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
    const url = URL.createObjectURL(file)
    console.log(url)
    setNoteToAdd(prevNote => ({
      ...prevNote,
      info: { ...prevNote.info, url },
    }))
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

            <div className="input-features">
              <img
                onClick={() => onChangeNoteType('photo')}
                src="assets/img/note/photo.svg"
              />
            </div>

            <button style={{ display: 'none' }} />
          </div>
        )}
      </form>
    </div>
  )
}

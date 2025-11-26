import { Loader } from '../../../cmps/Loader.jsx'
import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteSideBar } from '../cmps/NoteSideBar.jsx'
import { OpenNote } from '../cmps/OpenNote.jsx'
import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React
const { Outlet } = ReactRouterDOM

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  const [isNoteOpen, setIsNoteOpen] = useState(false)

  useEffect(() => {
    loadNotes()
  }, [])

  function loadNotes() {
    noteService
      .query()
      .then(notes => {
        setNotes(notes)
      })
      .catch(console.log)
  }

  function saveNote(note) {
    noteService
      .save(note)
      .then(note => {
        setNotes([...notes, note])
        // showSuccessMsg('Note added!')
      })
      .catch(err => {
        console.log('err:', err)
        // showErrorMsg('Problem adding note')
      })
  }

  function removeNote(noteId) {
    noteService
      .remove(noteId)
      .then(() => {
        setNotes(notes => notes.filter(note => note.id !== noteId))
        // showSuccessMsg(`Note removed successfully`)
      })
      .catch(err => {
        console.log('err:', err)
        // showErrorMsg('Cannot remove note')
      })
  }

  function toggleTodo(todoId) {
    const todoNote = notes.filter(note => note.type === 'todo')
    const allTodos = todoNote.flatMap(note => note.info.todos)
    const todo = allTodos.find(todo => todo.id === todoId)

    if (!todo) return

    todo.isDone = !todo.isDone

    setNotes([...notes])
  }

  if (!notes.length) return <Loader />
  return (
    <section className="note-index note-main-layout">
      <NoteSideBar />
      <NoteList
        notes={notes}
        saveNote={saveNote}
        removeNote={removeNote}
        toggleTodo={toggleTodo}
      />
      <Outlet />
    </section>
  )
}

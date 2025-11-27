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
        setNotes([note, ...notes])
        showSuccessMsg('Note added!')
      })
      .catch(err => {
        console.log('err:', err)
        showErrorMsg('Problem adding note')
      })
  }

  function removeNote(noteId) {
    noteService
      .remove(noteId)
      .then(() => {
        setNotes(notes => notes.filter(note => note.id !== noteId))
        showSuccessMsg(`Note removed successfully`)
      })
      .catch(err => {
        console.log('err:', err)
        showErrorMsg('Cannot remove note')
      })
  }

  function paintNote(noteId, color) {
    noteService.get(noteId).then(note => {
      note.style.backgroundColor = color

      noteService.save(note).then(savedNote => {
        setNotes(
          notes.map(note => (note.id === savedNote.id ? savedNote : note))
        )
      })
    })
  }

  function pinNote(noteId) {
    noteService.get(noteId).then(note => {
      note.isPinned = !note.isPinned

      noteService.save(note).then(savedNote => {
        setNotes(
          notes.map(note => (note.id === savedNote.id ? savedNote : note))
        )
      })
    })
  }

  function toggleTodo(noteId, todoId) {
    noteService.get(noteId).then(note => {
      const todoIdx = note.info.todos.findIndex(todo => todo.id === todoId)
      if (todoIdx === -1) return
      note.info.todos[todoIdx].isDone = !note.info.todos[todoIdx].isDone

      noteService.save(note).then(savedNote => {
        setNotes(
          notes.map(note => (note.id === savedNote.id ? savedNote : note))
        )
      })
    })
  }

  return (
    <section className="note-index note-main-layout">
      <NoteSideBar />
      <NoteList
        notes={notes}
        saveNote={saveNote}
        removeNote={removeNote}
        paintNote={paintNote}
        toggleTodo={toggleTodo}
        pinNote={pinNote}
      />
      <Outlet />
    </section>
  )
}

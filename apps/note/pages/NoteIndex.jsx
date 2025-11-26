import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteSideBar } from '../cmps/NoteSideBar.jsx'
import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React

export function NoteIndex() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadNotes()
  }, [])

  function loadNotes() {
    noteService
      .query()
      .then(notes => {
        setNotes(notes.reverse())
        console.log(notes)
      })
      .catch(console.log)
  }

  function saveNote(note) {
    noteService
      .save(note)
      .then(note => {
        loadNotes()
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

  return (
    <section className="note-index note-main-layout">
      <NoteHeader />
      <NoteSideBar />
      <NoteList notes={notes} saveNote={saveNote} removeNote={removeNote} />
    </section>
  )
}

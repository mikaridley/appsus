import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteSideBar } from '../cmps/NoteSideBar.jsx'
import { noteService } from '../services/note.service.js'
import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'

const { useState, useEffect } = React

export function NoteIndex() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadNotes()
  }, [notes])

  function loadNotes() {
    noteService
      .query()
      .then(notes => {
        setNotes(notes)
        console.log(notes)
      })
      .catch(console.log)
  }

  function saveNote(note) {
    noteService
      .save(note)
      .then(note => {
        console.log(note)
        // showSuccessMsg('Note added!')
      })
      .catch(err => {
        console.log('err:', err)
        // showErrorMsg('Problem adding note')
      })
  }

  return (
    <section className="note-index note-main-layout">
      <NoteHeader />
      <NoteSideBar />
      <NoteList notes={notes} saveNote={saveNote} />
    </section>
  )
}

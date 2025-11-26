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
        setNotes(notes)
        console.log(notes)
      })
      .catch(console.log)
  }

  return (
    <section className="note-index note-main-layout">
      <NoteHeader />
      <NoteSideBar />
      <NoteList notes={notes} />
    </section>
  )
}

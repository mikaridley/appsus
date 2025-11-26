import { AddNote } from './AddNote.jsx'
import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, saveNote }) {
  console.log(notes)

  return (
    <section className="note-list">
      <AddNote saveNote={saveNote} />
      <NotePreview notes={notes} />
    </section>
  )
}

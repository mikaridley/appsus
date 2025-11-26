import { AddNote } from './AddNote.jsx'
import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes }) {
  console.log(notes)

  return (
    <section className="note-list">
      <AddNote />
      <NotePreview notes={notes} />
    </section>
  )
}

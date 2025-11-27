import { AddNote } from './AddNote.jsx'
import { NotePreview } from './NotePreview.jsx'

export function NoteList({
  notes,
  saveNote,
  paintNote,
  removeNote,
  toggleTodo,
}) {
  console.log(notes)

  return (
    <section className="note-list">
      <AddNote saveNote={saveNote} />
      <NotePreview
        notes={notes}
        removeNote={removeNote}
        paintNote={paintNote}
        toggleTodo={toggleTodo}
      />
    </section>
  )
}

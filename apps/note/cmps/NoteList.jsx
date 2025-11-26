export function NoteList({ notes }) {
  console.log(notes)

  return (
    <section className="note-list">
      <div>take a note..</div>
      <section className="notes-container">
        {notes.map(({ id, info }) => {
          return (
            <div key={id} className="note">
              <h2 className="note-title">{info.title}</h2>
              <p>{info.txt}</p>
            </div>
          )
        })}
      </section>
    </section>
  )
}

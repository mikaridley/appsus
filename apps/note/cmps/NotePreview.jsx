export function NotePreview({ notes }) {
  return (
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
  )
}

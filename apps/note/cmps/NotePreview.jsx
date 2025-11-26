const { Link } = ReactRouterDOM

export function NotePreview({ notes, removeNote }) {
  function onRemoveNote(id) {
    removeNote(id)
  }

  return (
    <section className="notes-container">
      {notes.map(({ id, info }) => {
        return (
          <div key={id} className="note">
            <Link to={`/note/${id}`}>
              <h2 className="note-title">{info.title}</h2>
              <p>{info.txt}</p>
            </Link>
            <div className="note-icons">
              <img
                onClick={ev => {
                  ev.stopPropagation()
                  onRemoveNote(id)
                }}
                src="../../../assets/img/note/Delete.png"
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

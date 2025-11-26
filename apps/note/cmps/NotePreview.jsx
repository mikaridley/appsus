export function NotePreview({ notes, removeNote }) {
  function onRemoveNote(id) {
    removeNote(id)
  }
  return (
    <section className="notes-container">
      {notes.map(({ id, info }) => {
        return (
          <div key={id} className="note">
            <h2 className="note-title">{info.title}</h2>
            <p>{info.txt}</p>
            <div className="note-icons">
              <img
                onClick={() => onRemoveNote(id)}
                src="../../../assets/img/note/Delete.png"
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

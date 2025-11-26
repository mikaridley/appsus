export function AddNote({ addNote }) {
  function onAddNote(ev) {
    ev.preventDefault()
    // addNote()
  }
  return (
    <div className="add-note">
      <form onSubmit={onAddNote}>
        <input type="text" placeholder="Take a note..." />
      </form>
    </div>
  )
}

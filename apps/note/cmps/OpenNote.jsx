import { noteService } from '../services/note.service.js'

const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

export function OpenNote() {
  const { noteId } = useParams()
  const [note, setNote] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    loadNote()
  }, [noteId])

  function loadNote() {
    noteService.get(noteId).then(setNote).catch(console.log)
  }

  function onBack() {
    navigate('/note')
  }

  if (!note) return <div>Loading...</div>
  return (
    <div onClick={onBack} className="note-black-screen">
      <div onClick={ev => ev.stopPropagation()} className="open-note">
        <h1>{note.id}</h1>
      </div>
    </div>
  )
}

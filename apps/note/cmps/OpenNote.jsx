const { useParams, useNavigate, Link } = ReactRouterDOM

export function OpenNote() {
  const { noteId } = useParams()
  const navigate = useNavigate()

  function onBack() {
    navigate('/note')
  }
  return (
    <div onClick={onBack} className="note-black-screen">
      <div onClick={ev => ev.stopPropagation()} className="open-note">
        <h1>hi</h1>
      </div>
    </div>
  )
}

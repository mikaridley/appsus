const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

export function NoteSideBar() {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState('notes')

  function onNotePage() {
    navigate('/note')
    setActivePage(page => 'notes')
  }
  return (
    <section className="note-side-bar">
      <div
        onClick={onNotePage}
        className={`side-bar-row ${activePage === 'notes' ? 'active' : ''}`}
      >
        <img src="assets/img/note/Default.png" />
        <p>Notes</p>
      </div>
      <div className="side-bar-row">
        <img src="assets/img/note/Default.png" />
        <p>Bin</p>
      </div>
    </section>
  )
}

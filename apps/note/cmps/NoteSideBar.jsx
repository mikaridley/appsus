const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

export function NoteSideBar({ setTypeFilter }) {
  const [activePage, setActivePage] = useState('notes')

  function onSetPage(type) {
    if (type === 'notes') {
      setActivePage(page => 'notes')
      setTypeFilter('notes')
    } else if (type === 'texts') {
      setActivePage(page => 'texts')
      setTypeFilter('texts')
    } else if (type === 'photos') {
      setActivePage(page => 'photos')
      setTypeFilter('photos')
    } else if (type === 'todos') {
      setActivePage(page => 'todos')
      setTypeFilter('todos')
    } else if (type === 'videos') {
      setActivePage(page => 'videos')
      setTypeFilter('videos')
    }
  }
  return (
    <section className="note-side-bar">
      <div
        onClick={() => onSetPage('notes')}
        className={`side-bar-row ${activePage === 'notes' ? 'active' : ''}`}
      >
        <img src="assets/img/note/light-bulb.svg" />
        <p>Notes</p>
      </div>
      <div
        onClick={() => onSetPage('texts')}
        className={`side-bar-row ${activePage === 'texts' ? 'active' : ''}`}
      >
        <img src="assets/img/note/text.png" />
        <p>Texts</p>
      </div>
      <div
        onClick={() => onSetPage('photos')}
        className={`side-bar-row ${activePage === 'photos' ? 'active' : ''}`}
      >
        <img src="assets/img/note/photo.png" />
        <p>Photos</p>
      </div>
      <div
        onClick={() => onSetPage('todos')}
        className={`side-bar-row ${activePage === 'todos' ? 'active' : ''}`}
      >
        <img src="assets/img/note/todo.png" />
        <p>Todos</p>
      </div>
      <div
        onClick={() => onSetPage('videos')}
        className={`side-bar-row ${activePage === 'videos' ? 'active' : ''}`}
      >
        <img src="assets/img/note/video.png" />
        <p>Videos</p>
      </div>
    </section>
  )
}

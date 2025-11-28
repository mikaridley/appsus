const { Link, NavLink, useParams, useLocation } = ReactRouterDOM

export function AppHeader() {
  const { pathname } = useLocation()

  function toggleMenu() {
    if (pathname === '/note') {
      document.body.classList.toggle('note-menu-open')
    }
  }

  return (
    <header className="app-header">
      <div onClick={toggleMenu} className="burger-container">
        <img className="burger" src="assets/img/note/burger.png" />
      </div>
      <Link to="/">
        <h3>LOGO!</h3>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/mail">Mail</NavLink>
        <NavLink to="/note">Note</NavLink>
      </nav>
    </header>
  )
}

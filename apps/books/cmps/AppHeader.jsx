const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className="app-header container">
      <section>
        <h1>
          <img className="logo" src="./assets/img/logo.png" />
        </h1>

        <nav className="app-nav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/book">Books</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </section>
    </header>
  )
}

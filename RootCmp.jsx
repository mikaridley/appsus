const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { MailIndex } from './apps/mail/pages/MailIndex.jsx'
import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { OpenNote } from './apps/note/cmps/OpenNote.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
  return (
    <Router>
      <AppHeader />
      <section className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />} />
          <Route path="/note" element={<NoteIndex />}>
            <Route path="/note/:noteId" element={<OpenNote />} />
          </Route>
        </Routes>
        <UserMsg />
      </section>
    </Router>
  )
}

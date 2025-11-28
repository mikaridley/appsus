const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { MailIndex } from './apps/mail/pages/MailIndex.jsx'
import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'
import { BookIndex } from './apps/books/pages/BookIndex.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { OpenNote } from './apps/note/cmps/OpenNote.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

import { MailDetails } from './apps/mail/cmps/MailDetails.jsx'

export function App() {
  return (
    <Router>
      <AppHeader />
      <section className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />}>
            <Route path="/mail/:mailId" element={<MailDetails />} />
          </Route>
          <Route path="/note" element={<NoteIndex />}>
            <Route path="/note/:noteId" element={<OpenNote />} />
          </Route>
          {/* <Route path="/book" element={<BookIndex />} /> */}
        </Routes>
        <UserMsg />
      </section>
    </Router>
  )
}

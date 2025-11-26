import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteSideBar } from '../cmps/NoteSideBar.jsx'

export function NoteIndex() {
  return (
    <section className="note-index note-main-layout">
      <NoteHeader />
      <NoteSideBar />
      <NoteList />
    </section>
  )
}

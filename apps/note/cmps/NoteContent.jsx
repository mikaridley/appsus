import { PhotoNote } from './PhotoNote.jsx'
import { TextNote } from './TextNote.jsx'
import { TodoNote } from './TodoNote.jsx'
import { VideoNote } from './VideoTodo.jsx'
import { ColorPalete } from './ColorPalete.jsx'

const { Link } = ReactRouterDOM
const { useState } = React

export function NoteContent({ notes, toggleTodo, paintNote, removeNote }) {
  const [colorOpenId, setColorOpenId] = useState('')

  function onPaintNote(id) {
    setColorOpenId(colorOpenId => {
      if (id === colorOpenId) return ''
      return id
    })

    function onRemoveNote(id) {
      removeNote(id)
    }
  }
  return (
    <section className="notes-container">
      {notes.map(({ id, info, type, style }) => {
        return (
          <div key={id} className="note" style={style}>
            <Link to={`/note/${id}`}>
              <DynamicCmp
                cmpType={type}
                info={info}
                noteId={id}
                toggleTodo={toggleTodo}
              />
            </Link>
            <div className="note-icons">
              <img
                onClick={ev => {
                  ev.stopPropagation()
                  onRemoveNote(id)
                }}
                src="assets/img/note/bin.svg"
              />
              <img
                onClick={ev => {
                  ev.stopPropagation()
                  onPaintNote(id)
                }}
                src="assets/img/note/paint.svg"
              />
            </div>
            {colorOpenId === id && (
              <ColorPalete noteId={id} paintNote={paintNote} />
            )}
          </div>
        )
      })}
    </section>
  )
}

function DynamicCmp(props) {
  const dynamicCmpMap = {
    text: <TextNote {...props} />,
    photo: <PhotoNote {...props} />,
    todo: <TodoNote {...props} />,
    video: <VideoNote {...props} />,
  }
  return dynamicCmpMap[props.cmpType]
}

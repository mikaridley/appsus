import { PhotoNote } from './PhotoNote.jsx'
import { TextNote } from './TextNote.jsx'

const { Link } = ReactRouterDOM
const { useState } = React

export function NotePreview({ notes, removeNote }) {
  function onRemoveNote(id) {
    removeNote(id)
  }

  return (
    <section className="notes-container">
      {notes.map(({ id, info, type }) => {
        console.log(type)
        return (
          <div key={id} className="note">
            <Link to={`/note/${id}`}>
              <DynamicCmp cmpType={type} info={info} />
            </Link>
            <div className="note-icons">
              <img
                onClick={ev => {
                  ev.stopPropagation()
                  onRemoveNote(id)
                }}
                src="assets/img/note/Delete.png"
              />
            </div>
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
    // todo: <TodoNote {...props} />,
  }
  return dynamicCmpMap[props.cmpType]
}

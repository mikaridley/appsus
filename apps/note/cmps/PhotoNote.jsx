export function PhotoNote({ info }) {
  return (
    <React.Fragment>
      <h2 className="note-title">{info.title}</h2>
      <img className="note-photo" src={info.url} />
    </React.Fragment>
  )
}

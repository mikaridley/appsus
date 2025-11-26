export function TextNote({ info }) {
  return (
    <React.Fragment>
      <h2 className="note-title">{info.title}</h2>
      <p>{info.txt}</p>
    </React.Fragment>
  )
}

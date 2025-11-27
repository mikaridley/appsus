export function VideoNote({ info }) {
  return (
    <React.Fragment>
      <h2 className="note-title">{info.title}</h2>
      <video className="video-input" controls>
        <source src={info.url} type="video/mp4" />
      </video>
    </React.Fragment>
  )
}

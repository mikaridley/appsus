export function ColorPalete({ noteId, paintNote }) {
  const coral = '#faafa8'
  const peach = '#f39f76'
  const sand = '#fff8b8'
  const none = '#ffffffff'
  const mint = '#e2f6d3'
  const sage = '#b4ddd3'
  const fog = '#d4e4ed'
  const storm = '#aeccdc'
  const dusk = '#d3bfdb'
  const blossom = '#f6e2dd'
  const clay = '#e9e3d4'
  const chalk = '#efeff1'

  return (
    <div className="note-paint-palete">
      <div
        onClick={() => paintNote(noteId, none)}
        style={{ backgroundColor: none }}
      ></div>
      <div
        onClick={() => paintNote(noteId, coral)}
        style={{ backgroundColor: coral }}
      ></div>
      <div
        onClick={() => paintNote(noteId, peach)}
        style={{ backgroundColor: peach }}
      ></div>
      <div
        onClick={() => paintNote(noteId, sand)}
        style={{ backgroundColor: sand }}
      ></div>
      <div
        onClick={() => paintNote(noteId, mint)}
        style={{ backgroundColor: mint }}
      ></div>
      <div
        onClick={() => paintNote(noteId, sage)}
        style={{ backgroundColor: sage }}
      ></div>
      <div
        onClick={() => paintNote(noteId, fog)}
        style={{ backgroundColor: fog }}
      ></div>
      <div
        onClick={() => paintNote(noteId, storm)}
        style={{ backgroundColor: storm }}
      ></div>
      <div
        onClick={() => paintNote(noteId, dusk)}
        style={{ backgroundColor: dusk }}
      ></div>
      <div
        onClick={() => paintNote(noteId, blossom)}
        style={{ backgroundColor: blossom }}
      ></div>
      <div
        onClick={() => paintNote(noteId, clay)}
        style={{ backgroundColor: clay }}
      ></div>
      <div
        onClick={() => paintNote(noteId, chalk)}
        style={{ backgroundColor: chalk }}
      ></div>
    </div>
  )
}

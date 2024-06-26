export default function EditLoading() {
  return (
    <div className="note skeleton-container" role="progressbar" aria-busy="true">
      <div className="note-header">
        EditLoading
        <div className="note-title skeleton" style={{ height: '3rem', width: '65%', marginInline: '12px 1em' }} />
        <div className="skeleton skeleton--button" style={{ width: '8em', height: '2.5em' }} />
      </div>
    </div>
  )
}

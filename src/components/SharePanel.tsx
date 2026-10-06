type SharePanelProps = {
  shareUrl: string
}

export function SharePanel({ shareUrl }: SharePanelProps) {
  return (
    <div className="share-row">
      <span className="share-pill">Anyone with the link can vote: {shareUrl}</span>
      <div className="share-actions">
        <button className="small-button" type="button">
          End voting
        </button>
        <button className="small-button alt" type="button">
          Copy link
        </button>
      </div>
    </div>
  )
}

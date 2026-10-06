export function SuggestionCard() {
  return (
    <div className="suggestion-card">
      <div className="suggestion-avatar">S</div>
      <div className="suggestion-text">
        <strong>Sam suggested:</strong> “Just order salads”
      </div>
      <div className="suggestion-actions">
        <button className="action-button primary" type="button">
          Add it
        </button>
        <button className="action-button" type="button">
          Not this time
        </button>
      </div>
    </div>
  )
}

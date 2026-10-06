export function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-left">
        <button className="nav-button active" type="button">
          <span className="nav-brand-mark" aria-hidden="true">
            ✓
          </span>
          tiebreak
        </button>
        <button className="nav-button" type="button">
          My polls
        </button>
        <button className="nav-button" type="button">
          Closed
        </button>
      </div>

      <div className="nav-right">
        <button className="new-poll" type="button">
          + New poll
        </button>
        <button className="profile-badge" type="button" aria-label="Profile">
          <img src="/avatars/priya.png" alt="Profile" />
        </button>
      </div>
    </nav>
  )
}

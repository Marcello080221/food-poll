type VoteMetaProps = {
  totalVotes: number
  avatarUrls: string[]
}

export function VoteMeta({ totalVotes, avatarUrls }: VoteMetaProps) {
  return (
    <div className="vote-meta">
      <div className="avatar-stack" aria-label="Voters">
        {avatarUrls.map((avatar, index) => (
          <img
            key={avatar}
            src={avatar}
            alt=""
            className="mini-avatar"
            style={{ zIndex: avatarUrls.length - index }}
          />
        ))}
      </div>
      <span>{totalVotes} of your crew voted • last one 2 min ago</span>
    </div>
  )
}

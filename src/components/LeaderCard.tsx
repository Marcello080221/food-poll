import type { PollOption } from '../types'

type LeaderCardProps = {
  leadOption: PollOption
  totalVotes: number
  leadMargin: number
}

export function LeaderCard({ leadOption, totalVotes, leadMargin }: LeaderCardProps) {
  return (
    <div className="leader-card">
      <div className="lead-ribbon">IN THE LEAD</div>

      <div className="leader-title">{leadOption.label}</div>

      {leadOption.suggestedBy && (
        <div className="leader-suggested">
          <span className="suggestion-mark">◉</span>
          Suggested by {leadOption.suggestedBy.name}
        </div>
      )}

      <div className="leader-score">{leadOption.percent}%</div>

      <div className="leader-bar-wrap">
        <div className="leader-bar" style={{ width: `${leadOption.percent}%` }} />
      </div>

      <div className="leader-footer">
        <span>{leadOption.votes} of {totalVotes} votes</span>
        <span>ahead by {leadMargin}</span>
      </div>
    </div>
  )
}

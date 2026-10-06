import type { PollOption } from '../types'

type PollOptionListProps = {
  options: PollOption[]
}

export function PollOptionList({ options }: PollOptionListProps) {
  return (
    <div className="option-list">
      {options.map((option) => (
        <div
          key={option.id}
          className={`option-row ${option.percent === 9 ? 'margherita-row' : ''}`}
        >
          <div className="option-head">
            <span>{option.label}</span>
            <span>{option.percent}%</span>
          </div>
          <div className="option-bar">
            <span style={{ width: `${option.percent}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

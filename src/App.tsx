import './App.css'
import pollData from '../public/poll.json'
import { LeaderCard } from './components/LeaderCard'
import { NavBar } from './components/NavBar'
import { PollOptionList } from './components/PollOptionList'
import { SharePanel } from './components/SharePanel'
import { StatusRow } from './components/StatusRow'
import { SuggestionCard } from './components/SuggestionCard'
import { VoteMeta } from './components/VoteMeta'
import type { Poll } from './types'

const poll = (pollData as { poll: Poll }).poll

const leadOption = poll.options.reduce(
  (best, option) => (option.votes > best.votes ? option : best),
  poll.options[0],
)

const avatarUrls = ['/avatars/priya.png', '/avatars/jonah.png', '/avatars/sam.png']
const otherOptions = poll.options.filter((option) => option.id !== leadOption.id)

function App() {
  return (
    <div className="page-shell">
      <div className="app-card">
        <div className="topbar">
          <NavBar />
        </div>

        <div className="content">
          <StatusRow />

          <h1 className="poll-title">{poll.title}</h1>

          <VoteMeta totalVotes={poll.totalVotes} avatarUrls={avatarUrls} />

          <LeaderCard
            leadOption={leadOption}
            totalVotes={poll.totalVotes}
            leadMargin={poll.leadMargin}
          />

          <PollOptionList options={otherOptions} />

          <div className="bottom-status">
            <span>{poll.totalVotes} votes in — still anyone's game</span>
            <span className="live-dot" aria-hidden="true" />
            <span className="live-label">Live — updates at votes land</span>
          </div>

          <SuggestionCard />

          <SharePanel shareUrl={poll.shareUrl} />

          <p className="note-text">
            Ending early isn't final — you can reopen voting later if the crew changes its mind.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

export type PollSuggestion = {
  id: string
  name: string
}

export type PollOption = {
  id: string
  label: string
  votes: number
  percent: number
  suggestedBy: PollSuggestion | null
}

export type Poll = {
  title: string
  totalVotes: number
  leadMargin: number
  shareUrl: string
  options: PollOption[]
}

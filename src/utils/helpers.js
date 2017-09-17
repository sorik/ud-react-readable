import moment from 'moment'

const TIME_FORMAT = 'DD-MM-YYYY HH:mm:ss'

export function formatTimestamp(timestamp) {
  return moment(timestamp).format(TIME_FORMAT)
}

export function sortByVoteScore(items) {
  return items.sort((a, b) => {
    return (a.voteScore < b.voteScore) ? 1 : ((b.voteScore < a.voteScore ? -1 : 0))
  })
}

export function sortByTimestamp(items) {
  return items.sort((a, b) => {
    return (a.timestamp > b.timestamp) ? -1 : ((b.timestamp > a.timestamp ? 1 : 0))
  })
}

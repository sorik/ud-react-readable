export function sortByVoteScore(posts) {
  return posts.sort((a, b) => {
    return (a.voteScore > b.voteScore) ? 1 : ((b.voteScore > a.voteScore ? -1 : 0))
  })
}

export function sortByTimestamp(posts) {
  return posts.sort((a, b) => {
    return (a.timestamp > b.timestamp) ? -1 : ((b.timestamp > a.timestamp ? 1 : 0))
  })
}

export function sortByVoteScore(posts) {
  return posts.sort((a, b) => {
    return (a.voteScore > b.voteScore) ? 1 : ((b.voteScore > a.voteScore ? -1 : 0))
  })
}

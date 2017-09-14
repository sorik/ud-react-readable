import React, { Component } from 'react'
import { sortByVoteScore, sortByTimestamp } from '../utils/helpers'

class PostList extends Component {
  state = {
    isSortbyVoteScore: true
  }

  render() {
    const { posts } = this.props
    const sortedPosts = this.state.isSortbyVoteScore ? sortByVoteScore(posts) : sortByTimestamp(posts)

    return (
      <div>
        <h2>Posts</h2>
        <button onClick={() => {this.setState({isSortbyVoteScore: false})}}>
          latest
        </button>
        <button onClick={() => {this.setState({isSortbyVoteScore: true})}}>
          highest score
        </button>
        <lu>
          {sortedPosts.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </lu>
      </div>
    )
  }
}

export default PostList

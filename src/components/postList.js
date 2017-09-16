import React, { Component } from 'react'
import { sortByVoteScore, sortByTimestamp } from '../utils/helpers'
import { Link } from 'react-router-dom'

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
            <div key={post.id}>
              <Link to={'/posts/' + post.id}>
                {post.title}
              </Link>
            </div>
          ))}
        </lu>
      </div>
    )
  }
}

export default PostList

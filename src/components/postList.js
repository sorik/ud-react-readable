import React, { Component } from 'react'
import { sortByVoteScore, sortByTimestamp } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PostList extends Component {
  state = {
    isSortbyVoteScore: true
  }

  render() {
    let { posts, category } = this.props

    let filteredPosts = posts
    if (category !== 'all') {
      filteredPosts = posts.filter((post) => { return post.category === category })
    }

    const sortedPosts = this.state.isSortbyVoteScore ? sortByVoteScore(filteredPosts) : sortByTimestamp(filteredPosts)

    return (
      <div>
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
      </div>
    )
  }
}

function mapStateToProp(state, props) {
  return state.posts ? state : { posts: [] }
}

export default connect(mapStateToProp)(PostList)

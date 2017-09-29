import React, { Component } from 'react'
import { sortByVoteScore, sortByTimestamp } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Post from './post'

class PostList extends Component {
  state = {
    isSortbyVoteScore: true
  }

  render() {
    let { posts, category } = this.props
    let filteredPosts = posts.filter(post => post.deleted === false)

    if (category !== 'all') {
      filteredPosts = filteredPosts.filter((post) => { return post.category === category })
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
              <div key={post.id} style={{"border-style": "double"}}>
                <Link to={`/${post.category}/${post.id}`}>
                  {post.title}
                </Link>
                <Post isFullview={false} postId={post.id}/>
                <br/><br/>
              </div>
            ))}
          </lu>
        </div>
      </div>
    )
  }
}

function mapStateToProp({ posts }, { category }) {
  return { posts, category }
}

export default connect(mapStateToProp)(PostList)

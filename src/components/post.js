import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  render() {
    const { title } = this.props.post

    return (
      <div>
        <div>{title}</div>
      </div>
    )
  }
}

function mapStateToProp(state, props) {
  const postId = props.match.params.id
  const posts =  state.posts.filter(post => post.id === postId)

  console.log(posts)

  return posts.length > 0 ? { post: posts[0] } : { post: {} }
}

export default connect(mapStateToProp)(Post)

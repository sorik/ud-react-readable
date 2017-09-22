import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteToPost, voteToComment } from '../utils/api'
import { updatePost, alterComment } from '../actions'

class Voting extends Component {

  like = () => {
    this.vote('upVote')
  }

  dislike = () => {
    this.vote('downVote')
  }

  vote = (votingType) => {
    const { type, id, updatePost, updateComment } = this.props

    if (type === 'post') {
      voteToPost(id, votingType)
        .then(res => {
          updatePost({ post: res })
        })
    } else if (type === 'comment') {
      voteToComment(id, votingType)
        .then(res => {
          updateComment({ postId: this.props.postId, comment: res })
        })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.like}>Like</button>
        <button onClick={this.dislike}>Dislike</button>
      </div>
    )
  }
}

function mapDispatchToProp(dispatch) {
  return {
    updatePost: (data) => dispatch(updatePost(data)),
    updateComment: (data) => dispatch(alterComment(data))
  }
}
export default connect(null, mapDispatchToProp)(Voting)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteToPost } from '../utils/api'
import { editPost } from '../actions'

class Voting extends Component {

  like = () => {
    this.vote('upVote')
  }

  dislike = () => {
    this.vote('downVote')
  }

  vote = (votingType) => {
    const { type, id, updatePost } = this.props

    if (type === 'post') {
      voteToPost(id, votingType)
        .then(res => {
          updatePost({ post: res })
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

function mapStateToProp(state) {
  return state
}

function mapDispatchToProp(dispatch) {
  return {
    updatePost: (data) => dispatch(editPost(data))
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(Voting)

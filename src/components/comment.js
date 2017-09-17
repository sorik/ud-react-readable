import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { deleteComment } from '../utils/api'
import { removeComment } from '../actions'

class Comment extends Component {

  delete = () => {
    const { id, parentId } = this.props.comment


    deleteComment(id)
      .then(res => {
        this.props.removeComment({ postId: parentId, commentId: id })
      })
  }

  render() {
    const { author, body, timestamp, voteScore } = this.props.comment
    return (
      <div>
        <table>
          <tr>
            <td>score is {voteScore}</td>
            <td>{author} wrote at {formatTimestamp(timestamp)}</td>
          </tr>
          <tr>
            {body}
          </tr>
          <tr>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button onClick={this.delete}>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

function mapStateToProp(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    removeComment: (data) => dispatch(removeComment(data))
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Comment)

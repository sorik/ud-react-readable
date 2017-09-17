import React, { Component } from 'react'
import { formatTimestamp } from '../utils/helpers'
import { deleteComment } from '../utils/api'

class Comment extends Component {

  delete = () => {
    const { id } = this.props.comment

    deleteComment(id)
      .then(res => {
        this.props.onDelete(id)
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

export default Comment

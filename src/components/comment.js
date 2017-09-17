import React, { Component } from 'react'
import { formatTimestamp } from '../utils/helpers'

class Comment extends Component {
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
        </table>
      </div>
    )
  }
}

export default Comment

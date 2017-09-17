import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
    const { comments } = this.props

    return (
      <div>
        <div>
          <h3>Comments</h3>
        </div>
        <div>
          <ul>
            {comments.map(comment => <Comment comment={comment}/>)}
          </ul>
        </div>

      </div>
    )
  }
}

export default CommentList

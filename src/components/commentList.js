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
            {comments
                .filter(comment => comment.deleted === false)
                .map(comment => {
                    return (
                      <Comment
                        key={comment.id}
                        comment={comment}
                        onDelete={this.props.onDelete}/>
                    )})}
          </ul>
          <br/>
        </div>

      </div>
    )
  }
}

export default CommentList

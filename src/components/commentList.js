import React, { Component } from 'react'
import Comment from './comment'
import { sortByVoteScore } from '../utils/helpers'

class CommentList extends Component {
  render() {
    const { comments } = this.props
    const activeComments = comments.filter(comment => comment.deleted === false)

    return (
      <div>
        <div>
          <h3>Comments({activeComments.length})</h3>
        </div>
        <div>
          <ul>
            {sortByVoteScore(activeComments).map(comment => {
                    return (
                      <Comment
                        key={comment.id}
                        comment={comment}/>
                    )})}
          </ul>
          <br/>
        </div>

      </div>
    )
  }
}

export default CommentList

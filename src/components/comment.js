import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { deleteComment, editComment } from '../utils/api'
import { removeComment, alterComment } from '../actions'
import Voting from './voting'

class Comment extends Component {
  state = {
    isEditMode: false,
    body: ''
  }

  delete = () => {
    const { id } = this.props.comment

    deleteComment(id)
      .then(res => {
        this.props.removeComment({ commentId: id })
      })
  }

  onChangeToEditMode = () => {
    this.setState({
      body: this.props.comment.body,
      isEditMode: true
    })
  }

  onEdited = (e) => {
    e.preventDefault()
    this.setState({ isEditMode: false })
    editComment(this.props.comment.id, this.state.body)
      .then(res => {
        this.props.alterComment({ comment: res })
      })
  }

  render() {
    const { id, author, body, timestamp, voteScore } = this.props.comment
    return (
      <div>
        <table>
          <tr>
            <td><h5>score is {voteScore}</h5></td>
            <td>{author} wrote at {formatTimestamp(timestamp)}</td>
          </tr>
          <tr>

            {this.state.isEditMode === false && <div>{body}</div>}
            {this.state.isEditMode === true &&
              <div>
                <input
                  type='text'
                  name='body'
                  onChange={e => this.setState({ body: e.target.value })}
                  value={this.state.body} />
                <button onClick={this.onEdited}>Edit</button>
              </div>
            }
          </tr>
          <tr>
            <td>
              <Voting type='comment' id={id} postId={this.props.comment.parentId} />
            </td>
            <td>
              {this.state.isEditMode === false &&
                <button onClick={this.onChangeToEditMode}>Edit</button>}
            </td>
            <td>
              <button onClick={this.delete}>Delete</button>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
        </table>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeComment: (data) => dispatch(removeComment(data)),
    alterComment: (data) => dispatch(alterComment(data))
  }
}

export default connect(null, mapDispatchToProps)(Comment)

import React, { Component } from 'react'
import { createComment } from '../utils/api'

class CreateComment extends Component {
  state = {
    author: '',
    body: ''
  }

  create = (e) => {
    e.preventDefault()
    let comment = { author: this.state.author, body: this.state.body }

    createComment(this.props.postId, comment)
      .then(res => {
        this.props.onCreated(res)
      })

    this.setState({ author: '', body: '' })
  }

  render() {
    return (
      <div>
        <div>
          <h4>Create a comment</h4>
        </div>
        <div>
          <form onSubmit={this.create}>
          <label>Author
            <input
              name='author'
              value={this.state.author}
              onChange={e => this.setState({ author: e.target.value })}
              type='text'/>
          </label>
          <input
            type='text'
            name='body'
            onChange={e => this.setState({ body: e.target.value })}
            value={this.state.body} />
          <button type='submit'>Create</button>
          </form>
        </div>
      </div>

    )
  }
}

export default CreateComment

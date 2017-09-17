import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { body } = this.props.comment
    return (
      <div>
        {body}
      </div>
    )
  }
}

export default Comment

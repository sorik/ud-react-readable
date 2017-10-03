import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPost } from '../utils/api'
import { updatePost } from '../actions'

class EditPost extends Component {
  state = {
  }

  edit = (e) => {
    e.preventDefault()

    editPost(this.state)
    .then(res => {
      this.props.updatePost({ post: res })
      this.props.history.goBack()
    })
  }

  componentDidMount() {
    this.setState({
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body,
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.edit}>
            <p>Title</p>
            <input
              name='title'
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              type='text'/>
            <p>Body</p>
            <textarea
              name='body'
              onChange={e => this.setState({ body: e.target.value })}
              value={this.state.body} />
            <p>
              <button type='submit'>Edit</button>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProp({ posts }, props) {
  if (posts.items) {
    const postId = props.match.params.post_id
    return { post: posts.items[postId] }
  }

  return { post: {} }
}

export default connect(mapStateToProp, { updatePost })(EditPost)

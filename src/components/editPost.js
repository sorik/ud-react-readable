import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPost } from '../utils/api'
import { updatePost } from '../actions'
import { Link } from 'react-router-dom'

class EditPost extends Component {
  state = {
    isSucceed: false
  }

  edit = (e) => {
    e.preventDefault()

    editPost(this.state)
    .then(res => {
      this.props.editPost({ post: res })
      this.setState({ isSucceed: true })
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
        {this.state.isSucceed !== true && (
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
        )}
        {this.state.isSucceed && (
          <div>
            <div>Successfully editted</div>
            <Link to={'/posts/' + this.state.id}>Go back</Link>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProp(state, props) {
  if (state.posts) {
    const postId = props.match.params.id
    const posts =  state.posts.filter(post => post.id === postId)

    return posts.length > 0 ? { post: posts[0] } : { post: {} }
  } else {
    return { post: {} }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: (post) => dispatch(updatePost(post))
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(EditPost)

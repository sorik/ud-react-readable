import React, { Component } from 'react'
import { createPost } from '../utils/api'
import { connect } from 'react-redux'
import { addPost } from '../actions'

class CreatePost extends Component {
  state = {
    author: '',
    title: '',
    body: '',
  }

  create = (e) => {
    e.preventDefault()

    createPost({
      "title": e.target.title.value,
      "author": e.target.author.value,
      "category": e.target.category.value,
      "body": e.target.body.value
    })
    .then(res => {
      if (res.id) {
        this.props.createdPost({ post: res })
      }
    })

    this.props.history.goBack()
  }

  render() {
    const { categories } = this.props

    return (
      <div>
        <div>
          <form onSubmit={this.create}>
            <label>Author
              <input
                name='author'
                value={this.state.author}
                onChange={e => this.setState({ author: e.target.value })}
                type='text'/>
            </label>
            <p></p>
            <label>Category
              <select
                name='category'
                value={this.state.category}
                onChange={e => this.setState({ category: e.target.value })}>
                {categories.map(cat => (
                  <option key={cat.name}>{cat.name}</option>
                ))}
              </select>
            </label>
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
              <button type='submit'>Create</button>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProp(state) {
  return { categories: state.category.categories }
}

function mapDispatchToProps(dispatch) {
  return {
    createdPost: (data) => dispatch(addPost(data))
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(CreatePost)

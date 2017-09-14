import React, { Component } from 'react'

class CreatePost extends Component {
  state = {
    author: '',
    title: '',
    body: ''
  }

  create = (e) => {
    e.preventDefault()
    
  }

  render() {
    const { category } = this.props

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
                {category.map(cat => (
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

export default CreatePost

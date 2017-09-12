import React, { Component } from 'react';
import { fetchCategories, fetchAllPosts } from '../utils/api'

class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount () {
    fetchCategories()
      .then(categories => {
        this.setState({ categories })
      })

    fetchAllPosts()
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    const { categories, posts } = this.state

    return (
      <div>
        <h1>Readable</h1>
        <h2>Categories</h2>
        <lo>
          {categories.map(category => (
            <li key={category.name}>{category.name}</li>
          ))}
        </lo>
        <h2>Posts</h2>
        <lu>
          {posts.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </lu>
      </div>
    );
  }
}

export default App;

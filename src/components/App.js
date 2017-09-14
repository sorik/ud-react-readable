import React, { Component } from 'react';
import { fetchCategories, fetchAllPosts } from '../utils/api'
import { sortByVoteScore, sortByTimestamp } from '../utils/helpers'

class App extends Component {

  state = {
    categories: [],
    posts: [],
    isSortbyVoteScorec: true
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

    const { categories, posts, isSortbyVoteScore } = this.state

    const sortedPosts = isSortbyVoteScore ? sortByVoteScore(posts) : sortByTimestamp(posts)

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
        <button onClick={() => {this.setState({isSortbyVoteScore: false})}}>
          latest
        </button>
        <button onClick={() => {this.setState({isSortbyVoteScore: true})}}>
          highest score
        </button>
        <lu>
          {sortedPosts.map(post => (
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

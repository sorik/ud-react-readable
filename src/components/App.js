import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { fetchCategories, fetchAllPosts } from '../utils/api'
import { sortByVoteScore, sortByTimestamp } from '../utils/helpers'
import CreatePost from './createPost'

class App extends Component {

  state = {
    categories: [],
    posts: [],
    isSortbyVoteScorec: true
  }

  onCreatingPost = (post) => {
    this.setState(state => ({ posts: state.posts.concat([post]) }))
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
        <Route exact path='/' render={() => (
          <div>
            <div>
              <h1>Readable</h1>
            </div>
            <div>
              <h2>Categories</h2>
              <lo>
                {categories.map(category => (
                  <li key={category.name}>{category.name}</li>
                ))}
              </lo>
            </div>

            <div>
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

            <div>
              <Link to='/create'>Create a post</Link>
            </div>
          </div>
        )}>
        </Route>

        <Route exact path='/create' render={() => (
          <div><CreatePost category={categories} onCreatingPost={this.onCreatingPost}/></div>
        )}>
        </Route>



      </div>
    );
  }
}

export default App;

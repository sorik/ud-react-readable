import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { fetchCategories, fetchAllPosts } from '../utils/api'
import CreatePost from './createPost'
import PostList from './postList'

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

    const { categories, posts } = this.state

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
              <PostList posts={posts} />
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

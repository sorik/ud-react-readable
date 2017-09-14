import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { fetchCategories, fetchAllPosts } from '../utils/api'
import CreatePost from './createPost'
import PostList from './postList'
import { fetchPosts, addPost } from '../actions'

class App extends Component {

  state = {
    categories: [],
  }

  onCreatingPost = (post) => {
    this.props.createdPost({ post })
  }

  componentDidMount () {
    fetchCategories()
      .then(categories => {
        this.setState({ categories })
      })

    fetchAllPosts()
      .then(posts => {
        this.props.fetchedPosts({ posts })
      })
  }

  render() {

    const { categories } = this.state
    const { posts } = this.props

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

function mapStateToProp(state) {
  return state.posts ? state : { posts: [] }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchedPosts: (posts) => dispatch(fetchPosts(posts)),
    createdPost: (post) => dispatch(addPost(post))
  }
}

export default connect(mapStateToProp, mapDispatchToProps, null, {pure: false})(App);

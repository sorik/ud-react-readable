import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { fetchCategories, fetchAllPosts } from '../utils/api'
import CreatePost from './createPost'
import PostList from './postList'
import Post from './post'
import EditPost from './editPost'
import { fetchPosts, addPost } from '../actions'

class App extends Component {

  state = {
    categories: [],
    selectedCategory: 'all'
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

  selectCategory(category) {
    this.setState({selectedCategory: category})
  }
  render() {

    const { categories, selectedCategory } = this.state
    const { posts } = this.props
    let filteredPosts = posts
    if (selectedCategory !== 'all') {
      filteredPosts = posts.filter((post) => { return post.category === selectedCategory })
    }
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <div>
              <h1>Readable</h1>
            </div>
            <div>
              <h2>Categories</h2>
              <form>
                  <input
                    type='radio'
                    name='all'
                    checked={selectedCategory === 'all'}
                    onChange={() => this.selectCategory('all')}/>all
                  {categories.map(category => (
                    <div key={category.name}>
                     <input
                      type='radio'
                      key={category.name}
                      checked={selectedCategory === category.name}
                      name={category.name} onChange={() => this.selectCategory(category.name)}/>
                      {category.name}
                    </div>
                  ))}
              </form>
            </div>

            <div>
              <PostList posts={filteredPosts} />
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

        <Route path='/posts/:id' component={Post}>
        </Route>

        <Route path='/edit/:id' component={EditPost}>
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

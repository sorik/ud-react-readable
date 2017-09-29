import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { fetchCategories, fetchAllPosts } from '../utils/api'
import CreatePost from './createPost'
import PostList from './postList'
import Post from './post'
import EditPost from './editPost'
import CategoryList from './categoryList'
import CategoryView from './categoryView'
import { fetchPosts, fetchCategories as fetchCategoriesAction} from '../actions'

class App extends Component {

  componentDidMount () {
    fetchCategories()
      .then(categories => {
        this.props.fetchCategoriesAction({ categories })
      })

    fetchAllPosts()
      .then(posts => {
        this.props.fetchPosts({ posts })
      })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <div>
              <h1>Readable</h1>
            </div>
            <div>
              <CategoryList />
            </div>

            <div>
              <PostList category='all'/>
            </div>

            <br/><br/>
            <div>
              <Link to='/create'>Create a post</Link>
            </div>
          </div>
        )}>
        </Route>

        <Route exact path='/create' component={CreatePost}>
        </Route>

        <Route exact path='/:category/:post_id' render={(props) => (
          <Post {...props} isFullview={true} />
        )}>
        </Route>

        <Route exact path='/:category/:post_id/edit' component={EditPost}>
        </Route>

        <Route exact path='/:category' component={CategoryView}>
        </Route>
      </div>
    );
  }
}

export default connect(null, { fetchPosts, fetchCategoriesAction }, null, {pure: false})(App);

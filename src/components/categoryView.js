import React, { Component } from 'react'
import PostList from './postList'
import { Link } from 'react-router-dom'

class CategoryView extends Component {
  render() {
    const { category } = this.props.match.params
    return (
      <div>
        <div>
          <h1>{category}</h1>
        </div>
        <div>
          <PostList category={category}/>
        </div>
        <br/><br/>
        <div>
          <Link to='/'>Go to main</Link>
        </div>
      </div>
    )
  }
}

export default CategoryView

import React, { Component } from 'react'
import PostList from './postList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CategoryView extends Component {
  render() {
    const { categories } = this.props
    const { category } = this.props.match.params

    return (
      <div>
        {categories.map(c => c.name).indexOf(category) >= 0 && (
          <div>
            <div>
              <h2>
                <Link to='/'>Go to main</Link>
              </h2>
            </div>
            <div>
              <h1>Category: {category}</h1>
            </div>
            <div>
              <PostList category={category}/>
            </div>
            <br/><br/>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProp({ category }) {
  return category
}
export default connect(mapStateToProp)(CategoryView)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoryList extends Component {

  selectCategory(category) {
    this.props.selectCategory({ selected: category })
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <h2>Categories</h2>
        <div>
          <ul>
          {categories.map(category => (
            <li key={category.name}>
              <Link
                to={`/${category.name}`}
                onClick={() => this.selectCategory(category.name)}>
              {category.name}
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProp({ category }) {
  const { categories } = category

  return categories ? { categories } : { categories: [] }
}

export default connect(mapStateToProp)(CategoryList)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCategory } from '../actions'

class CategoryList extends Component {

  selectCategory(category) {
    this.props.selectCategory({ selected: category })
  }

  render() {
    const { categories, selectedCategory } = this.props
    return (
      <div>
        <h2>Categories</h2>
        <form>
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
    )
  }
}

function mapStateToProp(state) {
  return state.category
}

function mapDispatchToProp(dispatch) {
  return {
    selectCategory: (data) => dispatch(selectCategory(data))
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(CategoryList)

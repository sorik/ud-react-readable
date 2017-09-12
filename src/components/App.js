import React, { Component } from 'react';
import { fetchCategories } from '../utils/api'

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount () {
    fetchCategories()
      .then(categories => {
        this.setState({ categories })
      })
  }

  render() {
    const { categories } = this.state

    return (
      <div>
        <h1>Readable</h1>
        <lo>
          {categories.map(category => (
            <li key={category.name}>{category.name}</li>
          ))}
        </lo>
      </div>
    );
  }
}

export default App;

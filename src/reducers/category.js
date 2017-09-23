import { FETCH_CATEGORIES } from '../actions'

const initialCategory = {
  categories: []
}

function category(state=initialCategory, action) {
  const { categories } = action

  switch(action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: state.categories.concat(categories)
      }

    default:
      return state
  }
}

export default category

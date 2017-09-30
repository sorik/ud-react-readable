import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../actions'

function category(state={}, action) {
  const { categories } = action

  switch(action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        categories,
      }

    default:
      return state
  }
}

export default category

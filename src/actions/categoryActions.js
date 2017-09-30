import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from './types'
import { fetchAllCategories } from '../utils/api'

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())
    return fetchAllCategories()
            .then(categories => {
              dispatch(receiveCategories(categories))
            })
  }
}

function shouldFetchCategories(state) {
  return state.isFetching ? false : (!state.categories ? true : false)
}

export function fetchCategoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState().category)) {
      return dispatch(fetchCategories())
    } else {
      return Promise.resolve()
    }
  }
}

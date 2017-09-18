import { combineReducers } from 'redux'
import { FETCH_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST } from '../actions'
import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, ALTER_COMMENT } from '../actions'
import { FETCH_CATEGORIES, SELECT_CATEGORY } from '../actions'

const initialCategory = {
  categories: [{ name: "all", path: "all" }],
  selectedCategory: 'all'
}

function category(state=initialCategory, action) {
  const { categories, selected } = action

  switch(action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: state.categories.concat(categories)
      }

    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: selected
      }
    default:
      return state
  }
}
function commentsCache(state=[], action) {
  const { parentId } = action

  switch(action.type) {
    case FETCH_COMMENTS:
      return state.concat([parentId])

    default:
      return state
  }
}

function comments(state = [], action) {
  const { comments, comment, commentId } = action

  switch(action.type) {
    case FETCH_COMMENTS:
      return state.concat(comments)

    case ADD_COMMENT:
      return state.concat([comment])

    case REMOVE_COMMENT:
      return state.filter(c => c.id !== commentId)

    case ALTER_COMMENT:
      return state.filter(c => c.id !== comment.id).concat([comment])

    default:
     return state
  }
}

function posts(state = [], action) {
  const { posts, post, id } = action

  switch(action.type) {
    case FETCH_POSTS:
      return posts

    case ADD_POST:
      return state.concat([post])

    case UPDATE_POST:
      var filteredPosts = state.filter(p => p.id !== post.id)

      return filteredPosts.concat([post])

    case REMOVE_POST:
      filteredPosts = state.filter(p => p.id !== id)
      var deletedPost = state.filter(p => p.id === id)[0]
      deletedPost.deleted = true;

      return filteredPosts.concat([deletedPost])

    default:
      return state
  }
}

export default combineReducers({ posts, comments, commentsCache, category })

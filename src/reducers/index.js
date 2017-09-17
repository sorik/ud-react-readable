import { combineReducers } from 'redux'
import { FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from '../actions'
import { FETCH_COMMENTS } from '../actions'

function comments(state = {}, action) {
  const { postId, comments } = action

  switch(action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        [postId]: comments
      }
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

    case EDIT_POST:
      var filteredPosts = state.filter(p => p.id !== post.id)

      return filteredPosts.concat([post])

    case DELETE_POST:
      filteredPosts = state.filter(p => p.id !== id)
      var deletedPost = state.filter(p => p.id === id)
      deletedPost.deleted = true;

      return filteredPosts.concat([deletedPost])
      
    default:
      return state
  }
}

export default combineReducers({ posts, comments })

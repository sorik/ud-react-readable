import { REQUEST_POSTS, RECEIVE_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST } from '../actions'

function posts(state = {}, action) {
  const { posts, post, id } = action

  switch(action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: posts,
      }

    case ADD_POST:
      return {
        ...state,
        items: state.items.concat([post])
      }

    case UPDATE_POST:
      return {
        ...state,
        items: state.items.map(p => (p.id !== post.id ? p : post))
      }

    case REMOVE_POST:
      var filteredPosts = state.items.filter(p => p.id !== id)
      var deletedPost = state.items.filter(p => p.id === id)[0]
      deletedPost.deleted = true;

      return {
        ...state,
        items: filteredPosts.concat([deletedPost])
      }

    default:
      return state
  }
}

export default posts

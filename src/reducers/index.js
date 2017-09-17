import { FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

function posts(state = {}, action) {
  const { posts, post, id } = action

  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts
      }
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat([post])
      }
    case EDIT_POST:
      var filteredPosts = state.posts.filter(p => p.id !== post.id)

      return {
        ...state,
        posts: filteredPosts.concat([post])
      }
    case DELETE_POST:
      filteredPosts = state.posts.filter(p => p.id !== id)
      var deletedPost = state.posts.filter(p => p.id === id)
      deletedPost.deleted = true;

      return {
        ...state,
        posts: filteredPosts.concat([deletedPost])
      }
    default:
      return state
  }
}

export default posts

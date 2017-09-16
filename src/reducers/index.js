import { FETCH_POSTS, ADD_POST, EDIT_POST } from '../actions'

function posts(state = {}, action) {
  const { posts, post } = action

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
      console.log(post)
      return {
        ...state,
        posts: filteredPosts.concat([post])
      }
    default:
      return state
  }
}

export default posts

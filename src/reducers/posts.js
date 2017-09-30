import { FETCH_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST } from '../actions'

function posts(state = [], action) {
  const { posts, post, id } = action

  switch(action.type) {
    case FETCH_POSTS:
      return posts

    case ADD_POST:
      return state.concat([post])

    case UPDATE_POST:
      return state.map(p => {
        if(p.id !== post.id) {
          return p
        }
        return post
      })

    case REMOVE_POST:
      var filteredPosts = state.filter(p => p.id !== id)
      var deletedPost = state.filter(p => p.id === id)[0]
      deletedPost.deleted = true;

      return filteredPosts.concat([deletedPost])

    default:
      return state
  }
}

export default posts

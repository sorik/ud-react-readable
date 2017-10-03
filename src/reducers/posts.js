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
      const normalisedPosts = posts.reduce((normalised, post) => {
        return {
          ...normalised,
          [post.id]: post
        }
      }, {})

      return {
        ...state,
        isFetching: false,
        items: normalisedPosts,
      }

    case ADD_POST:
      return {
        ...state,
        items: {
          ...state.items,
          [post.id]: post
        }
      }

    case UPDATE_POST:
      return {
        ...state,
        items: {
          ...state.items,
          [post.id]: post
        }
      }

    case REMOVE_POST:
      let deletedPost = state.items[id]
      deletedPost.deleted = true;

      return {
        ...state,
        items: {
          ...state.items,
          [id]: deletedPost
        }
      }

    default:
      return state
  }
}

export default posts

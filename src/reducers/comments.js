import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, ALTER_COMMENT } from '../actions'

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

export default comments

import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, ALTER_COMMENT } from '../actions'

function comments(state = [], action) {
  const { comments, comment } = action

  switch(action.type) {
    case FETCH_COMMENTS:
      return state.concat(comments)

    case ADD_COMMENT:
      return state.concat([comment])

    case REMOVE_COMMENT:
      comment.deleted = true
      return state.filter(c => c.id !== comment.id).concat([comment])

    case ALTER_COMMENT:
      return state.filter(c => c.id !== comment.id).concat([comment])

    default:
     return state
  }
}

export default comments

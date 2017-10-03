import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, ALTER_COMMENT } from '../actions'

function comments(state = {}, action) {
  const { comments, comment } = action

  switch(action.type) {
    case FETCH_COMMENTS:
      const normalisedComments = comments.reduce((normalised, comment) => {
        return {
          ...normalised,
          [comment.id]: comment
        }
      }, {})
      return normalisedComments

    case ADD_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      }

    case REMOVE_COMMENT:
      comment.deleted = true
      return {
        ...state,
        [comment.id]: comment
      }

    case ALTER_COMMENT:
    return {
      ...state,
      [comment.id]: comment
    }
    
    default:
     return state
  }
}

export default comments

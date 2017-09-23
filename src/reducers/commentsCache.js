import { FETCH_COMMENTS } from '../actions/types'

function commentsCache(state=[], action) {
  const { parentId } = action

  switch(action.type) {
    case FETCH_COMMENTS:
      return state.concat([parentId])

    default:
      return state
  }
}

export default commentsCache

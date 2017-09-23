import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, ALTER_COMMENT } from './types'

export function fetchComments({ parentId, comments }) {
  return {
    type: FETCH_COMMENTS,
    parentId,
    comments
  }
}

export function addComment({ postId, comment }) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function removeComment({ postId, commentId }) {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

export function alterComment({ postId, comment }) {
  return {
    type: ALTER_COMMENT,
    comment
  }
}

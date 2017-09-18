export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const ADD_COMMENT = 'CREATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const ALTER_COMMENT = 'ALTER_COMMENT'
export const CACHE_COMMENTS = 'CACHE_COMMENTS'

export function fetchPosts({ posts }) {
  return {
    type: FETCH_POSTS,
    posts
  }
}

export function addPost({ post }) {
  return {
    type: ADD_POST,
    post
  }
}

export function editPost({ post }) {
  return {
    type: EDIT_POST,
    post
  }
}

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}

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

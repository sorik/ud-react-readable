export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
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

export function updatePost({ post }) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function removePost({ id }) {
  return {
    type: REMOVE_POST,
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

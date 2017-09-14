export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'

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

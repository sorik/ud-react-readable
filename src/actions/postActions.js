import { FETCH_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST } from './types'

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

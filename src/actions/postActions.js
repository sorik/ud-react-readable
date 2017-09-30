import { REQUEST_POSTS, RECEIVE_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST } from './types'
import { fetchAllPosts } from '../utils/api'

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetchAllPosts()
            .then(posts => {
              dispatch(receivePosts(posts))
            })
  }
}

function shouldFetchPosts(state) {
  return state.isFetching ? false : (!state.posts ? true : false)
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState().posts)) {
      return dispatch(fetchPosts())
    } else {
      return Promise.resolve()
    }
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

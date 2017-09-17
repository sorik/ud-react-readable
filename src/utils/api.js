const AUTHORIZATION = 'madacasca'
const HEADERS = {
  'Authorization': AUTHORIZATION,
  'Content-Type': 'application/json'
}

export function fetchCategories() {
  return fetch(
      `http://localhost:3001/categories`,
      { headers: HEADERS }
    )
    .then(res => res.json())
    .then(res => res.categories)
}

export function fetchAllPosts() {
  return fetch(
      `http://localhost:3001/posts`,
      { headers: HEADERS }
    )
    .then(res => res.json())
}

export function createPost(post) {
  var id = Date.now() * 1000
  var body = {
    ...post,
    id: id.toString(),
    timestamp: Date.now()
  }

  return fetch(
    `http://localhost:3001/posts`,
    {
      headers: HEADERS,
      method: 'POST',
      body: JSON.stringify(body)
    }
  )
  .then(res => res.json())
}

export function editPost(post) {
  var body = {
    'title': post.title,
    'body': post.body
  }

  return fetch(
    `http://localhost:3001/posts/${post.id}`,
    {
      headers: HEADERS,
      method: 'PUT',
      body: JSON.stringify(body)
    }
  )
  .then(res => res.json())
}

export function deletePost(id) {
  return fetch(
      `http://localhost:3001/posts/${id}`,
      { headers: HEADERS,
        method: 'DELETE'
      }
    )
}

export function fetchComments(postId) {
  return fetch(
      `http://localhost:3001/posts/${postId}/comments`,
      { headers: HEADERS }
    )
    .then(res => res.json())
}

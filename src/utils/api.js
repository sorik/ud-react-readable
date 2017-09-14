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
  var body = {
    ...post,
    id: Date.now() * 1000,
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

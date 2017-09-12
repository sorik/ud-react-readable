const AUTHORIZATION = 'madacasca'
const HEADERS = { headers: { 'Authorization': AUTHORIZATION }}

export function fetchCategories() {
  return fetch(
      `http://localhost:3001/categories`,
      HEADERS
    )
    .then(res => res.json())
    .then(res => res.categories)
}

export function fetchAllPosts() {
  return fetch(
      `http://localhost:3001/posts`,
      HEADERS
    )
    .then(res => res.json())
}

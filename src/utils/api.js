const AUTHORIZATION = 'madacasca'

export function fetchCategories() {
  return fetch(
      `http://localhost:3001/categories`,
      { headers: { 'Authorization': AUTHORIZATION }})
    .then(res => res.json())
    .then(res => res.categories)
}

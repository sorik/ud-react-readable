import { FETCH_CATEGORIES } from './types'

export function fetchCategories({ categories }) {
  return {
    type: FETCH_CATEGORIES,
    categories
  }
}

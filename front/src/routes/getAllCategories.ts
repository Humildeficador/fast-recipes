import { api } from '../services/api'
import type { CategoryList } from '../types/types'

export function getAllCategories() {
  return api.get<CategoryList>('/categories')
}

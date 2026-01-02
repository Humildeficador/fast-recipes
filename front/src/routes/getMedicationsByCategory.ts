import { api } from '../services/api'
import type { MedicationType } from '../types/types'

export function getMedicationsByCategory(slug: string) {
  return api.get<MedicationType[]>(`/category/${slug}/medications`)
}
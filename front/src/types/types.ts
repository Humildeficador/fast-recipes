export type CategoryList = CategoryType[]

export interface CategoryType {
  id: number,
  name: string,
  medications: MedicationType[]
}

export interface MedicationType {
  id: number
  name: string
  categoryId: number
  dosage?: string
  duration?: string
  frequency?: string
  quantity?: string
}
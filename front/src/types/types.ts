export type CategoryList = CategoryType[]

export interface CategoryType {
  id: number,
  name: string,
  medications: MedicationsType[]
}

export interface MedicationsType {
  id: number
  name: string
  categoryId: number
  dosage?: string
  duration?: string
  frequency?: string
  quantity?: string
}
export type CategoryList = CategoryType[]

export interface CategoryType {
  id: number,
  name: string,
  slug: string,
}

export interface MedicationType {
  id: number
  name: string
  forms: []
}
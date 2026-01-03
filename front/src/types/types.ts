export type CategoryList = CategoryType[]

export interface CategoryType {
  id: number,
  name: string,
  slug: string,
}

export interface MedicationType {
  id: number
  name: string
  forms: Forms[]
}

export interface Forms {
  id: number,
  medicationId: number,
  formId: number,
  isActive: boolean,
  form: Form
}

export interface Form {
  id: number,
  slug: string,
  name: string,
  unit_label: string
}
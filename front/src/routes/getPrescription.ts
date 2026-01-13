import { api } from '../services/api'
import type { FormSchema } from '../types/types'

interface getPrescriptionProps {
  formId: string,
  medicationId: number
}

export function getPrescription({ formId, medicationId }: getPrescriptionProps) {
  return api.get<FormSchema>(`/prescription/forms/${formId}/medication/${medicationId}`)
}
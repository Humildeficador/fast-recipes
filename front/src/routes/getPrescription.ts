import { api } from '../services/api'

interface getPrescriptionProps {
  formId: string,
  medicationId: number
}

export function getPrescription({ formId, medicationId }: getPrescriptionProps) {
  return api.get(`/prescription/forms/${formId}/medication/${medicationId}`)
}
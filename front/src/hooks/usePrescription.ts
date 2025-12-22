import { useState } from 'react';
import type { MedicationType } from '../types/types';

export function usePrescription() {
  const [medications, setMedications] = useState<MedicationType[]>([])

  function handleSetMedications(medication: MedicationType) {
    setMedications((prev) => {
      const exists = prev.some(med => med.id === medication.id)

      if (exists) {
        return prev.filter(med => med.id !== medication.id)
      }

      return [...prev, medication]
    })
  }

  return {
    handleSetMedications,
    medications,
  }
}
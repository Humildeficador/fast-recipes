import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { MedicationType } from '../types/types'

interface PrescriptionContextData {
  medicationsList: MedicationType[],
  toggleMedication: (medication: MedicationType) => void
  removeMedication: (id: number) => void
}

const PrescriptionContext = createContext<PrescriptionContextData | null>(null)

export function PrescriptionProvider({ children }: { children: React.ReactNode }) {
  const [medicationsList, setMedications] = useState<MedicationType[]>([])

  const toggleMedication = useCallback((medication: MedicationType) => {
    setMedications((prev) => {
      const exists = prev.some(med => med.id === medication.id)

      if (exists) {
        return prev.filter(med => med.id !== medication.id)
      }

      return [...prev, medication]
    })
  }, [])

  const removeMedication = useCallback((id: number) => {
    setMedications((prev) => {
      const exists = prev.some(med => med.id === id)

      if (exists) {
        return prev.filter(med => med.id !== id)
      } else {
        return prev
      }
    })
  }, [])

  const value = useMemo(() => ({
    medicationsList,
    toggleMedication,
    removeMedication
  }), [medicationsList, toggleMedication, removeMedication])

  return (
    <PrescriptionContext.Provider value={value}>
      {children}
    </PrescriptionContext.Provider>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export function usePrescription() {
  const context = useContext(PrescriptionContext)

  if (!context) {
    throw new Error('usePrescription must be used within a PrescriptionProvider')
  }

  return context
}
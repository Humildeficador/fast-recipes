import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { MedicationType } from '../types/types'

interface PrescriptionContextData {
  medicationsList: MedicationType[],
  toggleMedication: (medication: MedicationType) => void
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

  const value = useMemo(() => ({
    medicationsList,
    toggleMedication
  }), [medicationsList, toggleMedication])

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
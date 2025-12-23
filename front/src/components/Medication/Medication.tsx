import { Checkbox } from "@chakra-ui/react"
import type { MedicationType } from '../../types/types'
import { usePrescription } from '../../context/PrescriptionContext'

interface MedicationProps {
  medication: MedicationType
}

export function Medication({ medication }: MedicationProps) {
  const { medications, toggleMedication } = usePrescription()

  const isChecked = medications.some(m => m.id === medication.id)

  return (
    <Checkbox.Root
      onCheckedChange={() => toggleMedication(medication)}
      checked={isChecked}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>
        {medication.name}
      </Checkbox.Label>
    </Checkbox.Root>
  )
}
import { Checkbox } from "@chakra-ui/react"
import type { MedicationType } from '../../types/types'

interface MedicationProps {
  medication: MedicationType
  medicationsList: MedicationType[]
  toggleMedication: (medication: MedicationType) => void
}

export function Medication({
  medication,
  medicationsList,
  toggleMedication
}: MedicationProps) {
  const isChecked = medicationsList.some(m => m.id === medication.id)

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
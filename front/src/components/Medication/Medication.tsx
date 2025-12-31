import { Checkbox } from "@chakra-ui/react"
import type { MedicationType } from '../../types/types'

interface MedicationProps {
  isChecked: boolean
  medication: MedicationType
  toggleMedication: (medication: MedicationType) => void
}

export function Medication({
  medication,
  isChecked,
  toggleMedication
}: MedicationProps) {

  console.log('Render')

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
import { Checkbox } from "@chakra-ui/react"
import type { MedicationType } from '../../types/types'
import { memo } from 'react'

interface MedicationProps {
  isChecked: boolean
  medication: MedicationType
  toggleMedication: (medication: MedicationType) => void
}

export const Medication = memo(({
  medication,
  isChecked,
  toggleMedication
}: MedicationProps) => {


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
})
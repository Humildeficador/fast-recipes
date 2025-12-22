import { usePrescription } from '../../hooks/usePrescription'
import type { MedicationType } from '../../types/types'
import { Checkbox, type CheckboxCheckedChangeDetails } from "@chakra-ui/react"

export function Medication(medication: MedicationType) {

  const { handleSetMedications } = usePrescription()

  async function handleCheck({ checked }: CheckboxCheckedChangeDetails) {
    console.log(checked)

    if (checked) {
      handleSetMedications(medication)
    }
  }

  return (
    <Checkbox.Root
      onCheckedChange={handleCheck}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>
        {medication.name}
      </Checkbox.Label>
    </Checkbox.Root>
  )
}
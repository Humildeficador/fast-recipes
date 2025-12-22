import { Checkbox } from "@chakra-ui/react"

interface MedicationProps {
  name: string
}

export function Medication({ name }: MedicationProps) {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>
        {name}
      </Checkbox.Label>
    </Checkbox.Root>
  )
}
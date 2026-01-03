import { For, Stack } from '@chakra-ui/react'
import { usePrescription } from '../../context/PrescriptionContext'
import { CheckedMedication } from './CheckedMedication/CheckedMedication'

export function CheckedMedications() {
  const { medicationsList } = usePrescription()

  return (
    <Stack position={'sticky'} top={4} >
      <For each={medicationsList}>
        {(medication) => (
          <CheckedMedication medication={medication} key={medication.id} />
        )}
      </For>
    </Stack>
  )
}
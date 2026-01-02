import { For, Stack, Text } from '@chakra-ui/react';
import { usePrescription } from '../../context/PrescriptionContext';

export function SelectedMedication() {
  const { medicationsList } = usePrescription()
  console.log(medicationsList)

  return (
    <Stack position={'sticky'} top={4} >
      <For each={medicationsList}>
        {(medication) => (
          <Text key={medication.id}>{medication.name}</Text>
        )}
      </For>
    </Stack>
  )
}
import { For, Stack, Text } from '@chakra-ui/react';
import { usePrescription } from '../../context/PrescriptionContext';

export function SelectedMedication() {
  const { medicationsList } = usePrescription()
  console.log(medicationsList)

  return (
    <Stack>
      <For each={medicationsList}>
        {(medication) => (
          <Text key={medication.id}>{medication.name}</Text>
        )}
      </For>
    </Stack>
  )
}
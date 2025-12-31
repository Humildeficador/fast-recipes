import { Span, Stack } from '@chakra-ui/react';
import { usePrescription } from '../../context/PrescriptionContext';

export function SelectedMedication() {
  const { medicationsList } = usePrescription()
  console.log(medicationsList)

  return (
    <Stack>
      {medicationsList.map((medication) => (
        <Span>{medication.name}</Span>
      ))}
    </Stack>
  )
}
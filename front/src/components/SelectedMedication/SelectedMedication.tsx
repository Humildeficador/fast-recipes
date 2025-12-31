import { Span, Stack } from '@chakra-ui/react';
import { usePrescription } from '../../context/PrescriptionContext';

export function SelectedMedication() {
  const { medications } = usePrescription()

  return (
    <Stack>
      {medications.map((medication) => (
        <Span>{medication.name}</Span>
      ))}
    </Stack>
  )
}
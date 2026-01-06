import { Select, Portal, type ListCollection, type MenuSelectionDetails, Box } from '@chakra-ui/react';
import { usePrescription } from '../../context/PrescriptionContext';
import { LuTrash } from 'react-icons/lu';

interface SelectBuilderProps {
  label: string
  list: ListCollection
  medicationId: number
  enableRemoveMedication?: boolean
  handleChangeSelectChangeValue: (e: MenuSelectionDetails) => void
}

export function SelectBuilder({
  list,
  label,
  medicationId,
  enableRemoveMedication,
  handleChangeSelectChangeValue
}: SelectBuilderProps) {
  const { removeMedication } = usePrescription()

  function handleRemoveMedication() {
    removeMedication(medicationId)
  }

  return (
    <Select.Root
      collection={list}
      size="sm"
      width="280px"
      onSelect={handleChangeSelectChangeValue}
    >
      <Select.HiddenSelect />
      <Select.Label display={'flex'} alignItems={'center'}>
        {label}
        {
          enableRemoveMedication &&
          <Box onClick={handleRemoveMedication} cursor={'pointer'} ml={2}>
            <LuTrash />
          </Box>
        }
      </Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Selecione a forma de aplicação" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {list.items.map((item) => (
              <Select.Item item={item} key={item.slug}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
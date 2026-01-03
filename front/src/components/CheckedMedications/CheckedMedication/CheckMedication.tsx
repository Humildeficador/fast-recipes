import type { MedicationType } from '../../../types/types'
import { getPrescription } from '../../../routes/getFormsByMedication'
import { Box, createListCollection, Portal, Select, type MenuSelectionDetails } from '@chakra-ui/react'

interface SelectedMedicationProps {
  medication: MedicationType
}

export function CheckedMedication({ medication }: SelectedMedicationProps) {
  const formsLabel = medication.forms.map(f => {
    return {
      label: f.form.name,
      value: f.form.id,
      slug: f.form.slug
    }
  })

  const list = createListCollection({ items: formsLabel })

  async function handleChangeSelectChangeValue(e: MenuSelectionDetails) {
    const { data } = await getPrescription({ formId: e.value, medicationId: medication.id })
    console.log(data)
  }

  return (
    <Box>
      <Select.Root
        collection={list}
        size="sm"
        width="280px"
        onSelect={handleChangeSelectChangeValue}
      >
        <Select.HiddenSelect />
        <Select.Label>{medication.name}</Select.Label>
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
    </Box>
  )
}
import type { FormSchema, MedicationType } from '../../../types/types'
import { getPrescription } from '../../../routes/getPrescription'
import { Box, createListCollection, Text, type MenuSelectionDetails } from '@chakra-ui/react'
import { SelectBuilder } from '../../SelectBuilder/SelectBuilder'
import { useState } from 'react'

interface SelectedMedicationProps {
  medication: MedicationType
}

export function CheckedMedication({ medication }: SelectedMedicationProps) {
  const [form, setForm] = useState<FormSchema | null>(null)

  function createCollectionForSelect() {
    const formsLabel = medication.forms.map(f => {
      return {
        label: f.form.name,
        value: f.form.id,
        slug: f.form.slug
      }
    })

    const list = createListCollection({ items: formsLabel })

    return list
  }

  async function handleChangeSelectChangeValue(e: MenuSelectionDetails) {
    const { data } = await getPrescription({ formId: e.value, medicationId: medication.id })

    setForm(data)
    console.log(form)
  }

  return (
    <Box>
      <SelectBuilder
        label={medication.name}
        placeholder='Selecione a forma de aplicação'
        list={createCollectionForSelect()}
        medicationId={medication.id}
        enableRemoveMedication
        handleChangeSelectChangeValue={handleChangeSelectChangeValue}
      />
      {
        form &&
        <>
          <Text>{JSON.stringify(form.id)}</Text>
          <Text>{JSON.stringify(form.dosage)}</Text>
          <Text>{JSON.stringify(form.duration)}</Text>
          <Text>{JSON.stringify(form.frequency)}</Text>
          <Text>{JSON.stringify(form.frequency_unit)}</Text>
          <Text>{JSON.stringify(form.medicationFormId)}</Text>
          <Text>{JSON.stringify(form.pediatric_calculation)}</Text>
          <Text>{JSON.stringify(form.quantity)}</Text>
        </>
      }
      {/* <Select.Root
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
      </Select.Root> */}
    </Box>
  )
}
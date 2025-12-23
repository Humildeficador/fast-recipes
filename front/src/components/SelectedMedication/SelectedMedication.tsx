import { Portal, Select, Span, Text } from '@chakra-ui/react'
import type { MedicationType } from '../../types/types'
import { createListCollection } from "@chakra-ui/react"
import { useState } from 'react'

interface SelectedMedicationProps {
  medication: MedicationType
}

export function SelectedMedication({ medication }: SelectedMedicationProps) {
  const [selectedDosage, setSelectedDosage] = useState<string | null>(null)


  const dosageCollection = createListCollection({
    items: medication.dosage
      ?.split("|")
      .map((dose) => ({
        label: dose,
        value: dose,
      })) ?? [],
  })

  return (
    <Span>
      <Text>{medication.name}</Text>
      <Select.Root
        collection={dosageCollection}
        value={selectedDosage ? [selectedDosage] : []}
        onValueChange={(e) => setSelectedDosage(e.value[0])}
        size="sm"
        width="240px"
      >
        <Select.HiddenSelect />

        <Select.Label>Dosagem</Select.Label>

        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Selecione a dosagem" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>

        <Portal>
          <Select.Positioner>
            <Select.Content>
              {dosageCollection.items.map((dose) => (
                <Select.Item item={dose} key={dose.value}>
                  {dose.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Span>
  )
}
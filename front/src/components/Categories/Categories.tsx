import { api } from '../../services/api'
import { useRef, useState } from 'react'
import { Medication } from '../Medication/Medication'
import { Accordion, For, Span, Stack } from "@chakra-ui/react"
import type { CategoryType, MedicationType } from '../../types/types'
import { usePrescription } from '../../context/PrescriptionContext'

type CategoryProps = Omit<CategoryType, 'id'>

export function Categories({ name, slug }: CategoryProps) {
  const [medications, setMedications] = useState<MedicationType[]>([])
  const isLoaded = useRef(false)
  const { medicationsList, toggleMedication } = usePrescription()

  async function getCategoryMedications() {
    if (isLoaded.current) return

    const res = await api.get<MedicationType[]>(`/category/${slug}/medications`)

    if (res.status === 200) isLoaded.current = true

    setMedications(() => res.data)
  }

  return (
    <Accordion.Item value={name} >
      <Accordion.ItemTrigger onClick={getCategoryMedications}>
        <Accordion.ItemIndicator />
        <Span flex="1">{name}</Span>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody>
          <Stack padding={3} borderWidth="1px" gap={5}>
            <For each={medications}>
              {(medication) => {
                const isChecked = medicationsList.some(m => m.id === medication.id)

                return (
                  <Medication
                    isChecked={isChecked}
                    medication={medication}
                    toggleMedication={toggleMedication}
                    key={medication.id}
                  />
                )
              }}
            </For>
          </Stack>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}
import { Accordion, Span, Stack } from "@chakra-ui/react"
import type { CategoryType, MedicationType } from '../../types/types'
import { Medication } from '../Medication/Medication'
import { api } from '../../services/api'
import { useRef, useState } from 'react'

type CategoryProps = Omit<CategoryType, 'id'>

export function Categories({ name, slug }: CategoryProps) {
  const [medications, setMedications] = useState<MedicationType[]>([])
  const isLoaded = useRef(false)

  async function getCategoryMedications() {
    if (isLoaded.current) return
    const res = await api.get<MedicationType[]>(`/category/${slug}/medications`)
    if (res.status === 200) isLoaded.current = true
    console.log(res.data)

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
            {medications.length > 0 && medications.map((medication) => (
              <Medication medication={medication} />
            ))}
          </Stack>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}
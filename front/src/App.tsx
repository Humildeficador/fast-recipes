import { api } from './services/api'
import { useEffect, useState } from 'react'
import { Accordion, Stack } from "@chakra-ui/react"
import type { CategoryList } from './types/types'
import { Categories } from './components/Categories/Categories'
import { usePrescription } from './context/PrescriptionContext'
import { SelectedMedication } from './components/SelectedMedication/SelectedMedication'

export function App() {
  const [categories, setCategories] = useState<CategoryList>([])

  const { medications } = usePrescription()

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get<CategoryList>('/categories')
      setCategories(() => data)
    }

    getCategories()
  }, [])

  return (
    <>
      <Accordion.Root collapsible multiple={false} gap={2}>
        <Stack gap={5}>
          {categories && categories.map(({ id, medications, name }) => (
            <Categories
              key={id}
              name={name}
              medications={medications}
            />
          ))}
        </Stack>
      </Accordion.Root>

      {medications.length > 0 &&
        <Stack mt={5} gap={2}>
          {medications.map((medication) => (
            <SelectedMedication medication={medication} key={medication.id} />
          ))}
        </Stack>
      }
    </>
  )
}
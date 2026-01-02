import { useEffect, useState } from 'react'
import { Accordion, Stack } from "@chakra-ui/react"
import type { CategoryList } from './types/types'
import { Categories } from './components/Categories/Categories'
import { Grid, GridItem } from "@chakra-ui/react"
import { usePrescription } from './context/PrescriptionContext'
import { SelectedMedication } from './components/SelectedMedication/SelectedMedication'
import { getAllCategories } from './routes/getAllCategories'

export function App() {
  const [categories, setCategories] = useState<CategoryList>([])
  const { medicationsList } = usePrescription()

  useEffect(() => {
    (async () => {
      const res = await getAllCategories()
      setCategories(() => res.data)
    })()
  }, [])

  const templateColumnsLogic = medicationsList.length > 0 ? 'repeat(3, 1fr)' : '1fr'

  return (
    <Grid templateColumns={templateColumnsLogic} gap={6}>
      <GridItem>
        <Accordion.Root collapsible multiple={false} gap={2}>
          <Stack gap={5}>
            {categories && categories.map(({ name, slug }) => (
              <Categories
                key={slug}
                name={name}
                slug={slug}
              />
            ))}
          </Stack>
        </Accordion.Root>
      </GridItem>

      {medicationsList.length > 0 &&
        <GridItem>
          <SelectedMedication />
        </GridItem>
      }

      {/* {medications.length > 0 &&
        <Stack mt={5} gap={2}>
          {medications.map((medication) => (
            <SelectedMedication medication={medication} key={medication.id} />
          ))}
        </Stack>
      } */}
    </Grid>
  )
}
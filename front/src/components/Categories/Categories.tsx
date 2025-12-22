import { Accordion, Span, Stack } from "@chakra-ui/react"
import type { CategoryType } from '../../types/types'
import { Medication } from '../Medication/Medication'

type CategoryProps = Omit<CategoryType, 'id'>

export function Categories({ name, medications }: CategoryProps) {

  return (
    <Accordion.Item value={name}>
      <Accordion.ItemTrigger>
        <Accordion.ItemIndicator />
        <Span flex="1">{name}</Span>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody>
          {medications.map(({ id, name }) => (
            <Stack padding="4" borderWidth="1px" key={id}>
              <Medication name={name} key={id} />
            </Stack>
          ))}
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}
import { Collapsible, Stack } from "@chakra-ui/react"
import { LuChevronRight } from "react-icons/lu"
import type { CategoryType } from '../../types/types'
import { Medication } from '../Medication/Medication'

type CategoryProps = Omit<CategoryType, 'id'>

export function Categories({ name, medications }: CategoryProps) {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger
        paddingY="3"
        display="flex"
        gap="2"
        alignItems="center"
      >
        <Collapsible.Indicator
          transition="transform 0.2s"
          _open={{ transform: "rotate(90deg)" }}
        >
          <LuChevronRight />
        </Collapsible.Indicator>
        {name}
      </Collapsible.Trigger>
      <Collapsible.Content>
        {medications.map(({ id, name }) => (

          <Stack padding="4" borderWidth="1px" key={id}>
            <Medication name={name} key={id} />
          </Stack>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>

  )
}
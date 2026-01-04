import { Select, Portal, type ListCollection, type MenuSelectionDetails } from '@chakra-ui/react';

interface SelectBuilderProps {
  label: string
  list: ListCollection
  handleChangeSelectChangeValue: (e: MenuSelectionDetails) => void
}

export function SelectBuilder({
  list,
  label,
  handleChangeSelectChangeValue
}: SelectBuilderProps) {
  return (
    <Select.Root
      collection={list}
      size="sm"
      width="280px"
      onSelect={handleChangeSelectChangeValue}
    >
      <Select.HiddenSelect />
      <Select.Label>{label}</Select.Label>
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
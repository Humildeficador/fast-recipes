import { api } from './services/api'
import { useEffect, useState } from 'react'
import type { CategoryList } from './types/types'
import { Categories } from './components/Categories/Categories'

export function App() {
  const [categories, setCategories] = useState<CategoryList>([])

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get<CategoryList>('/categories')
      setCategories(() => data)
    }

    getCategories()
  }, [])

  return (
    <>
      {categories.map(({ id, medications, name }) => (
        <Categories
          key={id}
          name={name}
          medications={medications}
        />
      ))}
    </>
  )
}
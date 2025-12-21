import { Button } from '@chakra-ui/react'
import { api } from './services/api'

export function App() {

  async function getHealth() {
    const res = await api.get('/health')

    console.log(res)
  }

  return (
    <>
      <h1>Fast Recipes</h1>
      <Button onClick={getHealth}>Get Health</Button>
    </>
  )
}
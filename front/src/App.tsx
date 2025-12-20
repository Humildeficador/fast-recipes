import { api } from './services/api'

export function App() {

  async function getHealth() {
    const res = await api.get('/health')

    console.log(res)
  }

  return (
    <>
      <h1>Fast Recipes</h1>
      <button onClick={getHealth}>Get Health</button>
    </>
  )
}
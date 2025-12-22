import './index.css'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import { Container } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Container pt={4}>
        <App />
      </Container>
    </Provider>
  </StrictMode>,
)

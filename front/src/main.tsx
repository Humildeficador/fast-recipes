import './index.css'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import { Container } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import { PrescriptionProvider } from './context/PrescriptionContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Container pt={4}>
        <PrescriptionProvider >
          <App />
        </PrescriptionProvider>
      </Container>
    </Provider>
  </StrictMode>,
)

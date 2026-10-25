import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Gold edition: the same site, recoloured in gold and navy-black.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App theme="gold" />
  </StrictMode>,
)

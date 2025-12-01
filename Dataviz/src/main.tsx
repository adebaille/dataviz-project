import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
//import Home from './Pages/Home'
import About from './Pages/About'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <About />
  </StrictMode>,
)

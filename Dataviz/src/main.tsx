import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Analyse from './Pages/Analyse'
import About from './Pages/About'


const router = createBrowserRouter ([
  {
    path : "/",
    element: <Home />,
  },
 {
    path : "/Analyse",
    element: <Analyse />,
  },
   {
    path : "/About",
    element: <About />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

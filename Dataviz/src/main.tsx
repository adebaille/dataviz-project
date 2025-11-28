import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Analyse from './Pages/Analyse';
import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  },
  {
    path: "/analyse",
    element: <Analyse />
  },
  { 
    path: "/about", 
    element: <About /> 
  },
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
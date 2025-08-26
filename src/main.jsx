import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from "../src/pages/Landing"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)

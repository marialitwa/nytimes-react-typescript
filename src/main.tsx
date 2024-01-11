import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './pages/Homepage.tsx'
import Story from './pages/Story.tsx'
import Error404 from './pages/Error404.tsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Homepage />
  },

  {
    path: "/story",
    element: <Story />
  },
  {
    path: "*",
    element: <Error404 />
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

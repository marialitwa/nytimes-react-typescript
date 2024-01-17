import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import ArticlesPage from './pages/ArticlesPage.tsx'
import Error404 from './pages/Error404.tsx'
import Layout from './components/Layout.tsx'
import ArticleDetailsPage from './pages/ArticleDetailsPage.tsx'
import Homepage from './pages/Homepage.tsx'

const router = createBrowserRouter([


  {
    element: <Layout><Outlet/></Layout>,
    children: [

      {
        path: "/",
        element: <Homepage />
      },

      {
        path: "/articles",
        element: <ArticlesPage />
      },
    
      {
        path: "/article/:id/:item_type",
        element: <ArticleDetailsPage />
      }

    ]
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

import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import Layout from './Layout'

const router = createBrowserRouter([
  { element: <Layout />, children: 
    [
      { path: '/', element: <MainPageAsync /> },
      { path: '/about', element: <AboutPageAsync/> },
    ] 
  }
])

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback="<div>Loading...</div>">
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
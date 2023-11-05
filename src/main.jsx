import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>

  <React.StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>

  </AuthProvider>

)

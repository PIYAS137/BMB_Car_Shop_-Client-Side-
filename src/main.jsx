import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import FirebaseContext from './Context/FirebaseContext'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext>
      <RouterProvider router={router} />
    </FirebaseContext>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/routes'



ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='px-24'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
</div>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//make this two import !!
// import router from './Router/index.jsx'
// import { RouterProvider } from 'react-router-dom'
import App from "./App.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/>  /* i don't why when i close this code  and then the router is still working ? :) */ }
    
    <App/>
  </StrictMode>,
)

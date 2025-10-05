import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import './index.css'
import App from './App.jsx'
import { LoginProvider } from './apis/Api_Felix.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LoginProvider>
      <App />
    </LoginProvider>
    </BrowserRouter>
    
  </StrictMode>,
)

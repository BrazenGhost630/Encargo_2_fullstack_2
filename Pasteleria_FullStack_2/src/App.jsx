import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
     <>
      <Routes>
        <Route path='/' element={<h1>Hola Mundo</h1>}/>
        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/contact' element={<h1>Contact</h1>}/>
      </Routes>
      </>
  )
}

export default App

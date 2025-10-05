
import { Route,Routes } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './Login/Formulario'

function App() {
  

  return (
     <>
     
      <Routes>
        
        <Route path='/' element={<h1>Hola Mundo</h1>}/>
        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/contact' element={<h1>Contact</h1>}/>
         <Route path='/login' element={<Formulario />} />
      </Routes>
      </>
  )
}

export default App

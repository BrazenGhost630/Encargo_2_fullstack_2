import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Páginas importadas para el router.
import Inicio from './pages/inicio';
import Login from './pages/login';
import Perfil from './pages/perfil';
import Nosotros from './pages/nosotros.jsx';
import Carrito from './pages/carrito.jsx';
import Catalogo from './pages/catalogo.jsx';
import Formulario from './components/Formulario';
import CambiarAdmin from './components/AdminVerificacion';
import AdminPanel from './pages/AdminPanel';
// Componentes importados.
import NavbarComp from './components/NavbarComp';


import Registro from './pages/Registro';
import { LoginProvider } from './apis/Api_Felix.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import { BaseDeDatosProvider } from './components/BaseDeDatosContexto.jsx';
import DetalleProducto from './pages/detalleProducto.jsx';

function App() {
  

  // Según yo el perfil no deviera estar en el nav-bar, desde inicio debieramos ir al login por un boton, lo agrego por ahora nomas.
  return (
    <LoginProvider>
    
      <BaseDeDatosProvider> 
      <div className="align-items-center max-width: max-content">
        {/* Barra de navegacion */}
        <NavbarComp/>

        {/* Contenido de las páginas */}
        <div className='main-content max-width: max-content'>
          
          <Routes>
            <Route path='/' element={ <Inicio /> } />
            <Route path='/login' element={ <Formulario /> } />
            <Route path='/registro' element={ <Registro /> } />
            <Route path='/perfil' element={ <PrivateRoute>
                                                <Perfil/>
                                              </PrivateRoute> }/>
            <Route path='/nosotros' element={ <Nosotros /> }/>
            <Route path='/carrito' element={ <Carrito /> }/>
            <Route path='/catalogo' element={ <Catalogo /> }/>
            <Route path='/detalleProducto' element={ <DetalleProducto/> }/>
            <Route path="/admin"element={
              <CambiarAdmin>
                <AdminPanel />
              </CambiarAdmin>
        }>
          
        </Route>
        
          </Routes>
          
        </div>
      </div>
      </BaseDeDatosProvider>
      </LoginProvider>
    


  )
}

export default App

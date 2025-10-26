import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Para el carrusel.

// Páginas importadas para el router.
import Inicio from './pages/inicio';
import Login from './pages/login';
import Perfil from './pages/perfil';
import Nosotros from './pages/nosotros';
import Carrito from './pages/carrito';
import Catalogo from './pages/catalogo';
import CambiarAdmin from './components/AdminVerificacion';
import AdminPanel from './components/AdminPanel';
// Componentes importados.
import ImagenFondo from './components/imagenFondo';
import { BaseDeDatosProvider } from './components/baseDeDatosContexto';
import DetalleProducto from './pages/detalleProducto';
// Importaciones del felix
import Registro from './pages/Registro';
import { LoginProvider } from './apis/Api_Felix.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; 

function App() {





  

  // Según yo el perfil no deviera estar en el nav-bar, desde inicio debieramos ir al login por un boton, lo agrego por ahora nomas.
  return (
    <LoginProvider>

      <BaseDeDatosProvider> 
        <ImagenFondo>
          <div className="align-items-center">
            {/* Barra de navegacion */}
            <Navbar bg='dark' variant='dark' expand='lg' >
              <Container className='me-auto align-items-center'>
                <Navbar.Brand as={NavLink} to="/">Pastelería dulce Tradición</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto align-items-center' >
                    <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
                    <Nav.Link as={NavLink} to="/login" end>Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/perfil" end>Perfil</Nav.Link>
                    <Nav.Link as={NavLink} to="/nosotros" end>Nosotros</Nav.Link>
                    <Nav.Link as={NavLink} to="/carrito" end>Carrito</Nav.Link>
                    <Nav.Link as={NavLink} to="/catalogo" end>Catálogo</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Contenido de las páginas */}
            <div className='main-content'>
              <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/registro' element={ <Registro /> } />
                <Route path='/perfil' element={ <PrivateRoute>
                                                  <Perfil/>
                                                </PrivateRoute> }/>
                <Route path='/nosotros' element={ <Nosotros /> }/>
                <Route path='/carrito' element={ <Carrito /> }/>
                <Route path='/catalogo' element={ <Catalogo /> }/>
                <Route path='/detalleProducto' element={ <DetalleProducto/> }/>
                <Route path="/admin"element={ <CambiarAdmin>
                                                <AdminPanel />
                                              </CambiarAdmin> }>
            </Route>
              </Routes>
            </div>
          </div>
        </ImagenFondo>
      </BaseDeDatosProvider>

    </LoginProvider>
  )
}

export default App

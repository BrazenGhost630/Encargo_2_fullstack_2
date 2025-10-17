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
import Nosotros from './pages/nosotros';
import Carrito from './pages/carrito';
import Catalogo from './pages/catalogo';
import Formulario from './components/Formulario';
import CambiarAdmin from './components/AdminVerificacion';
import AdminPanel from './components/AdminPanel';
// Componentes importados.
import Footer from './components/footer';
import ImagenFondo from './components/imagenFondo';
import Registro from './pages/Registro';

function App() {
  

  // Según yo el perfil no deviera estar en el nav-bar, desde inicio debieramos ir al login por un boton, lo agrego por ahora nomas.
  return (
    

      <div className="align-items-center max-width: max-content">
        {/* Barra de navegacion */}
        <Navbar bg='dark' variant='dark' expand='lg' className='fixed-top mb-5 d-flex'>
          <Container className='max-width: max-content'>
            <Navbar.Brand as={NavLink} to="/">Pastelería dulce Tradición</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='max-width: max-content' >
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
        <div className='main-content max-width: max-content'>
          <Routes>
            <Route path='/' element={ <Inicio /> } />
            <Route path='/login' element={ <Formulario /> } />
            <Route path='/registro' element={ <Registro /> } />
            <Route path='/perfil' element={ <Perfil /> }/>
            <Route path='/nosotros' element={ <Nosotros /> }/>
            <Route path='/carrito' element={ <Carrito /> }/>
            <Route path='/catalogo' element={ <Catalogo /> }/>
            <Route path="/admin"element={
              <CambiarAdmin>
                <AdminPanel />
              </CambiarAdmin>
        }>
          
        </Route>
          </Routes>
        </div>
      </div>
    


  )
}

export default App

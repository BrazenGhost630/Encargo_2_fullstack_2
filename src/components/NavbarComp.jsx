
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function NavbarComp() {

    return (<Navbar bg='dark' variant='dark' expand='lg' className='fixed-top mb-5 d-flex'>
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
        </Navbar>)
}
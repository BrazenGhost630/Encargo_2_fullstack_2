import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css';

function Footer(){
    return (
        <footer style={{backgroundColor: '#fffefec6'}}>
            <Container fluid className='text-center'>
                <h3 className='mb-2'>Contáctanos</h3>
                <p className='mb-1 fw-bold'>Pastelería Dulce Tradición</p>
                <p className='mb-1'>Dirección: Calle Valparaiso 123, Viña del Mar</p>
                <p className='mb-1'>Teléfono: +34 555 123 456</p>
                <p className='mb-1'>Email: contacto@dulceTradicion.com</p>
                <p className='mb-2 mt-2'>Síguenos en redes sociales:</p>

                <Navbar className='justify-content-center'>
                    <Nav.Link href='https://facebook.com' target='-blank' className='social-link'>
                        Facebook
                    </Nav.Link>
                    <Nav.Link href='https://instagram.com' target='-blank' className='social-link'>
                        Instagram
                    </Nav.Link>
                    <Nav.Link href='https://X.com' target='-blank' className='social-link'>
                        X
                    </Nav.Link>
                </Navbar>

                <small className='d-block mt-2'>
                    &copy;{new Date().getFullYear()} Pastelería Dulce Tradición. Todos los derechos reservados.
                </small>
            </Container>
        </footer>
    )
}

export default Footer
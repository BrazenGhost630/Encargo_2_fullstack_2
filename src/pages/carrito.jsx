import React from 'react';
import { Container } from 'react-bootstrap';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';



function Carrito(){
    return (
        <Container className="mt-4">
            <h1>Carrito</h1>
            <Footer />
        </Container>
        
    )
}

export default Carrito
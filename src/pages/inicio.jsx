import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Info from '../components/info';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';

// Recuerda que acá toda función tiene que exportar.
function Inicio(){
    return (
        <Container md={6} className="align-items-center">
            <h1 style={{backgroundColor: '#fafafaaa'}} >Inicio</h1>
            <Footer />
        </Container>
    )
}

export default Inicio
 


            
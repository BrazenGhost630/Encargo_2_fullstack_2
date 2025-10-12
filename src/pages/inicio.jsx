import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Info from '../components/info';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';

// Recuerda que acá toda función tiene que exportar.
function Inicio(){
    return (
        <Col md={6}>
            <h1>Inicio</h1>
            <Info/>
            <Footer />
        </Col>
    )
}

export default Inicio



            
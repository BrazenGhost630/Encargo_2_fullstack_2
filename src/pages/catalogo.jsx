import React from 'react';
import { Container, Col } from 'react-bootstrap';
import ListaCatalogo from '../components/listaCatalogo';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';



function Catalogo(){
    return(
        <Col className="mt-4">
            <h1 style={{backgroundColor: '#fafafaaa'}} >Catálogo</h1>
            <ListaCatalogo/>
            <Col>
                <Footer />
            </Col>
        </Col>
        
    )
}

export default Catalogo
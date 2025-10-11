import React from 'react';
import { Container } from 'react-bootstrap';
import ListaCatalogo from '../components/listaCatalogo';



function Catalogo(){
    return(
        <Container className="mt-4">
            <h1>Catálogo</h1>
            <ListaCatalogo/>
        </Container>
    )
}

export default Catalogo
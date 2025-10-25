import React from 'react';
import { Container } from 'react-bootstrap';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';
import ListaCarrito from '../components/listaCarrito'; 



function Carrito(){
    return (
        <Container className="mt-4">
            <h1 style={{backgroundColor: '#fafafaaa'}} >Carrito</h1>
            <ListaCarrito/> 
            <Footer />
        </Container>
        
    )
}

export default Carrito
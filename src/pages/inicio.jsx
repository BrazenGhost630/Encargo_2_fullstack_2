import React, { useContext } from 'react';
import { useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Info from '../components/info';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';
import Presentacion from '../components/Presentacion';
import Carrusel from '../components/carrusel';
import ListaCatalogo from '../components/listaCatalogo';
import { BaseDeDatosContext } from '../components/baseDeDatosContexto';


function Inicio(){
    // Prueba de contexto.
    // Creamos una constante que toma los datos del contexto.
    const productosPrueba = useContext(BaseDeDatosContext);

    

    return(
        <Container style={{ backgroundColor: 'white' }}>
            <Presentacion/>

            {/** Contenido tipo tienda. */}
            <Carrusel/>
            <p/>
            <ListaCatalogo/>

            <Footer/>
        </Container>
    )
}

export default Inicio
 



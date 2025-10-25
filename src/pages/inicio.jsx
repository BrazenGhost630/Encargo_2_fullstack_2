import React from 'react';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Info from '../components/info';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';
import RegistroInicio from '../components/RegistroInicio';
import Presentacion from '../components/Presentacion';
import Carrusel from '../components/carrusel';
import ListaCatalogo from '../components/listaCatalogo';

// Recuerda que acá toda función tiene que exportar.
function Inicio(){

    return (
        <Container md={7} className="align-items-center" >
            <p>

            </p>
            <p></p>
            <p></p>
            <h1 style={{backgroundColor: '#fafafaaa'}}  >Inicio</h1>

            <Presentacion/>
        
            <Carrusel/>
            <p/>
            <ListaCatalogo/>

            <Footer/>
            
        </Container>
    )
}

export default Inicio
 



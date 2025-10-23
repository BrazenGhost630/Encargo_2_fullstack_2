import React from 'react';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Info from '../components/info';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';
import Presentacion from '../components/Presentacion';
import Carrusel from '../components/carrusel';


function Inicio(){
    return(
        <ImagenFondo>
            <Presentacion/>

            {/** Contenido tipo tienda. */}
            <Carrusel/>

            <Footer/>
        </ImagenFondo>
    )
}

export default Inicio
 



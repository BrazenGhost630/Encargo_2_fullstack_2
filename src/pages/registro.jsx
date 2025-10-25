import React from 'react';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Info from '../components/info';
import ImagenFondo from '../components/imagenFondo';
import RegistroInicio from '../components/RegistroInicio';
import Presentacion from '../components/Presentacion';


export default function Registro(){

    return (
        <Container md={7} className="align-items-center" >
            


            <RegistroInicio/>

            <Footer />
            
        </Container>
    )
}
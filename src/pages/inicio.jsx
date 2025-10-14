import React from 'react';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Info from '../components/info';
import ImagenFondo from '../components/imagenFondo';
import Footer from '../components/footer';
import RegistroInicio from '../components/RegistroInicio';
import Presentacion from '../components/Presentacion';

// Recuerda que acá toda función tiene que exportar.
function Inicio(){

    const [form, setForm] = useState({
        nombre: '',
        valparaiso: '',
        email: '',
        telefono: '',
        calle: '',
        password: '',
        confirmPassword: '',
        
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        

        
        alert('Formulario enviado');
    };
    return (
        <Container md={7} className="align-items-center" >
            
            <h1 style={{backgroundColor: '#fafafaaa'}} >Inicio</h1>

            <Presentacion/>
            <RegistroInicio/>

            <Footer />
            
        </Container>
    )
}

export default Inicio
 



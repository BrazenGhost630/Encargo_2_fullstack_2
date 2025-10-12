import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer'
import Formulario from '../components/Formulario';


function Login(){
    return (
        <Container className="mt-4">
            <h1>Login</h1>
            <Formulario/> {/* El formulario se llama desde acá, no directamente, los componentes se llaman desde las paginas, no son paginas en si mismos */}
            <Footer/>
        </Container>
    )
}

export default Login
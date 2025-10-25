import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer'
// Importacion componente felix
import PerfilComp from '../components/PerfilComp.jsx';



function Perfil(){
    return (
        <Container className="mt-4">
            <h1 style={{backgroundColor: '#fafafaaa'}} >Perfil</h1>
            <PerfilComp/>
            <Footer/>
        </Container>
    )
}

export default Perfil
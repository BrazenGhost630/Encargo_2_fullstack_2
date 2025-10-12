import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer';
import Info from '../components/info';




function Nosotros(){
    return (
        <Container className="mt-4">
            <h1 style={{backgroundColor: '#fafafaaa'}} >Nosotros</h1>
            <Info/>
            <Footer />
        </Container>
    )
}

export default Nosotros
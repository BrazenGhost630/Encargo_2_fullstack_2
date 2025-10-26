
import { Container } from 'react-bootstrap';

import Footer from '../components/Footer';
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
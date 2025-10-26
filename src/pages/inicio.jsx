
import { Row, Col, Container } from 'react-bootstrap';


import Footer from '../components/Footer';

import Presentacion from '../components/Presentacion';
import Carrusel from '../components/carrusel';
import ListaCatalogo from '../components/ListaCatalogo';

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
 



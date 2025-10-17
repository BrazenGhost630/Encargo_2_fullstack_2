
import { Container } from 'react-bootstrap';
import Footer from '../components/footer'

import RegistroInicio from '../components/RegistroInicio';


export default function Registro(){

    return (
        <Container md={7} className="align-items-center" >
            


            <RegistroInicio/>

            <Footer />
            
        </Container>
    )
}
import React from 'react';
import { Col, Image, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Componente con una imagen y un texto de la empresa.

function Info(){
    // Contenedor de los varios componentes.
    return (
        <Container fluid className="align-items-center">
            <Row className="align-items-center">
                <Col md={16}>
                    <Image 
                        src='https://enterreno.s3.us-east-2.amazonaws.com/moments/5372_calle-valparaiso-de-via-del-mar-en-1925.jpg'
                        alt='viña vieja'
                        fluid
                        className='mb-3 mb-md-0'
                    />
                </Col>
                <Col md={16}>
                    <p>
                        Pastelería Dulce Tradición ha sido parte de la ciudad puerto desde sus mismos inicios 
                        cuando don Tradición fundó la pastelería desde su humilde y señorial palacio en calle Valparaíso. 
                        Junto a su señora, doña Tradición, empezaron un viaje de más de un siglo de sabor y dulzura para el 
                        barrio, la ciudad, y por qué no decirlo, el mundo.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Info
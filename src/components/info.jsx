import React from 'react';
import { Col, Image, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Componente con una imagen y un texto de la empresa.

function Info(){
    // Contenedor de los varios componentes.
    return (
        <Container fluid className="align-items-center mb-4">

            <Row style={{backgroundColor: '#fbdfa2aa'}} className="rounded-3 mb-5" >
                <Col xs={6} className='p-4'>
                    <Image 
                        src='https://enterreno.s3.us-east-2.amazonaws.com/moments/5372_calle-valparaiso-de-via-del-mar-en-1925.jpg'
                        alt='viña vieja'
                        fluid
                        rounded
                    />
                </Col>
                <Col xs={6} className="d-flex align-items-center p-4" >
                    <p className="fw-bold fs-4">
                        Pastelería Dulce Tradición ha sido parte de la ciudad puerto desde sus mismos inicios 
                        cuando don Tradición fundó la pastelería desde su humilde y señorial palacio en calle Valparaíso. 
                        Junto a su señora, doña Tradición, empezaron un viaje de más de un siglo de sabor y dulzura para el 
                        barrio, la ciudad, y por qué no decirlo, el mundo.
                    </p>
                </Col>  
            </Row>

            <p/>

            <Row style={{backgroundColor: '#fbcba2aa'}} className="rounded-3 mb-5" >
                <Col xs={6} className="d-flex align-items-center p-4" >
                    <p className="fw-bold fs-4">
                        Don Tradición, el visionario detrás de nuestra pastelería, dedicó su vida a la creación de dulces inolvidables. 
                        Con su pasión por los sabores auténticos y su herencia familiar, transformó un simple palacio en un legado de tradición y excelencia. 
                        Hoy, su espíritu guía cada receta que preparamos.
                    </p>
                </Col>
                <Col xs={6} className='p-4'>
                    <Image 
                        src='https://i.pinimg.com/474x/a8/5f/4f/a85f4f28ea00e956e9905a23db8efb44.jpg'
                        alt='Don tradicion'
                        fluid 
                        rounded
                    />
                </Col>
            </Row>

            <p/>

            <Row style={{backgroundColor: '#fbb7a2aa'}} className="rounded-3 mb-5" >
                <Col xs={6} className='p-4'>
                    <Image 
                        src='https://hayunrobotenmicocina.com/wp-content/uploads/2022/04/Todo-pasteles-y-dulces.png'
                        alt='torta'
                        fluid 
                        rounded
                    />
                </Col>
                <Col xs={6} className="d-flex align-items-center p-4" >
                    <p className="fw-bold fs-4">
                        Y así es como llegamos a la más tradicional casa de dulces de la ciudad jardin. 
                        Dulces de todos los tamaños, sabores y colores, dulces a su disposición si tan solo nos viene a visitar.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Info
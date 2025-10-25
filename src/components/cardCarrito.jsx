import { Button, Card, Row, Col } from "react-bootstrap";



// Formato de cada fila del carrito.
function CardCarrito({ producto }){
    // Creamos variables donde guardamos los datos del producto.
    const { id, nombre, precio, url } = producto;
    // Retornamos un objeto rendereable. 
    return (
        <Card className="mb-3" style={{ width: '100%' }}>
            <Row className="align-items-center g-0">
                <Col xs={12} md={4}>
                    <Card.Img
                        variant='top'
                        src={url} 
                        // className="img-fluid"
                        style={{
                            height: '200px', // Altura fija más pequeña para responsividad
                            objectFit: 'cover', // Ajusta la imagen sin distorsionarla
                            width: '100%',
                        }}
                    />
                </Col>
                
                <Col xs={12} md={3} className="d-flex align-items-center">
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                    </Card.Body>
                </Col>

                <Col xs={12} md={2} className="d-flex align-items-center">
                    <Card.Body>
                        <Card.Text>${precio.toLocaleString()}</Card.Text>
                    </Card.Body>
                </Col>

                <Col xs={12} md={3} className="d-flex align-items-center">
                    <Card.Body className="d-flex gap-2">
                        <Button variant="danger">Eliminar</Button>
                        <Button variant="primary">Aumentar</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default CardCarrito
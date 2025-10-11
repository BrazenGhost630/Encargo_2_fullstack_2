import { Button, Card } from 'react-bootstrap';



// Carta que muestra un  producto.
function CardProducto({ producto }){
    // Creamos variables donde guardamos los datos del producto.
    const { id, nombre, precio, url } = producto;
    // Retornamos un html.
    return(
        <Card className="mb-3" style={{ width: '100%', maxWidth: '30rem' }}>
            <Card.Img 
                variant='top'
                src={url} 
                className="img-fluid"
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 3', // Proporción 3:4 (alto:ancho)
                    overflow: 'hidden'
                }}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{precio.toLocaleString()}</Card.Text>
                <Button>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default CardProducto
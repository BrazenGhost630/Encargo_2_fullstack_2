import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




// Carta que muestra un  producto.
function CardProducto({ producto }){
    // Creamos variables donde guardamos los datos del producto.
    const { id, nombre, precio, url, resena, categoria } = producto;

    // Funcion que importa navigate
    const navigate = useNavigate()

    // Funcion que maneja el click en la imagen.
    const funcionalidadClick = () => {
        // Guardamos el producto de la iteración actual en el local storage.
        localStorage.setItem('productoSeleccionado', JSON.stringify(producto))
        navigate('/detalleProducto')
    }


    // Funcionalidad del carrito.
    // Creamos una funcion que agrega el producto al carrito
    const agregarACarrito = () => {
        // Partimos recuperando el carrito del local storage.
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        // Agregamos el producto al carrito.
        const nuevoCarrito = [...carritoActual, producto];
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        alert('Producto agregado al carrito');
    }
    




    // Retornamos un html.
    // Comillas para futuras referencias:  `````````
    // El link es para redirigir a una pagina detalle del producto.
    return(
        <Card className="mb-3" style={{ width: '100%', maxWidth: '30rem' }}>
            <div
                role='button'
                tabIndex={0}
                onClick={funcionalidadClick}
                style={{ textDecoration: 'none', cursor: 'pointer' }}>
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
            </div>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>${precio.toLocaleString()}</Card.Text>
                <Button onClick={agregarACarrito}
                >Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default CardProducto
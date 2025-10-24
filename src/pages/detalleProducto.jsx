import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// Página que muestra el detalle del producto seleccionado.
function DetalleProducto(){
    // Creamos la variable que va a contener el producto que vamos a mostrar
    const [producto, setProducto] = useState(null) // null es el valor antes de recibir el producto

    // Usamos una función asíncrona para recuperar la info del local storage.
    useEffect(() => {
        // Recuperamos el producto del local storage, es un json
        const productoGuardado = localStorage.getItem('productoSeleccionado')
        if (productoGuardado){ // Si recibimos datos
            setProducto(JSON.parse(productoGuardado)) // parseamos el json al producto
        }
        // Vaciamos el local storage.
        return () => localStorage.removeItem('productoSeleccionado')
    }, [])

    // tiene que estar para cargar la imagen
    if (!producto) {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h2>Producto no seleccionado</h2>
            <Link to="/">
              <Button variant="primary">Volver al catálogo</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
  // Esctructura la  variable que recibió el json.
  const { nombre = 'Producto sin nombre', precio = 0, url = '', resena = 'resena',categoria = 'Sin categoría' } = producto;


    // Return es una pagina
    return(
        <Container
            fluid // Es para que ocupe toda la pantalla
            className="my-4"
            style={{
                position: "relative", // Sirve de referencia para el contenedor de abajo.
                backgroundImage: `url(${producto.url})`,
                backgroundSize: "cover", // Cubir pantalla
                backgroundPosition: "center", // Centrar.
                backgroundRepeat: "no-repeat", // No repetir la imagen para llenar espacio
                minHeight: "100vh" // Altura minima.
            }}
        >
            <Container 
                fluid
                style={{
                    position: 'absolute', // fija en el contenedor padre
                    bottom: 0, // Distancia del fondo
                    left: 0, // distancia del comienzo
                    width: "100%",  // ocupa todo el ancho
                    height: "50%",  // ocupa la mitad del alto
                    backgroundColor: "white", // color de fondo
                    borderTopLeftRadius: "40px", // Para redondear los bordes
                    borderTopRightRadius: "40px", // Para redondear los bordes
                }}
            >
                <h1 className="mt-4">{producto.nombre}</h1>

                <h3 className="mt-4">Precio: ${producto.precio}</h3>

                <p className='mt-5'/>
                <p className='md-3'>Reseña: {producto.resena}</p>
                
                <div
                    style={{
                    position: "absolute", // fija en el contenedor padre
                    bottom: "20px", // distancia del fondo
                    left: "50%", // Centra el contenido horizontalmente
                    transform: "translateX(-50%)", // centrar horizontalmente
                    }}
                >
                    <Link to="/">
                        <Button variant="info" style={{color: 'white', fontWeight: "bold"}}>Volver al catálogo</Button>
                    </Link>
                </div>

            </Container>
        </Container>
    )
}

export default DetalleProducto
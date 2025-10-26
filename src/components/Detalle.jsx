import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Detalle(){

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

  const { nombre = 'Producto sin nombre', precio = 0, url = '', resena = 'resena',categoria = 'Sin categoría' } = producto;

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
                    <h1 className='md-3'>{producto.nombre}</h1>
    
                    <h3 className='md-3'>Precio: ${producto.precio}</h3>
    
                    <p />
                    <p >Reseña: {producto.resena}</p>
                    
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
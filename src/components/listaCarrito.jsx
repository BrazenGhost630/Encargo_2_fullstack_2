import { Container, Row, Col, Button } from "react-bootstrap";
import CardCarrito from "./cardCarrito";
import { useState, useEffect } from 'react';



// Lista de productos en el carrito. 
function ListaCarrito(){
    // Creamos una variable que contenga el carrito tomado de local storage
    const [carrito, setCarrito] = useState([])
    // Usamos una función asíncrona para recuperar la info del local storage.
    useEffect(() => {
        // Recuperamos el producto del local storage, es un json
        const carritoGuardado = localStorage.getItem('carrito')
        if (carritoGuardado){ // Si recibimos datos
            setCarrito(JSON.parse(carritoGuardado)) // parseamos el json al producto
        }
    }, [])
    // tiene que estar para cargar la imagen
    if (carrito.length === 0) {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h2>El carrito está vacío</h2>
          </Col>
        </Row>
      </Container>
    );}

    // Funcion que elimina un producto del carrito.
    const eliminarDelCarrito = (id) => {
    // Encontramos el índice del primer producto encontrado.
    const indice = carrito.findIndex((producto) => producto.id === id)
    if (indice !== -1) { // Pregunta si el indice es distinto de -1, -1 sería la respuesta negativa.
      // Creamos una copia del carrito
      const nuevoCarrito = [...carrito]
      // Eliminamos solo la primera ocurrencia usando splice
      nuevoCarrito.splice(indice, 1)
      // Actualizamos el estado del carrito
      setCarrito(nuevoCarrito)
      // Persistimos el nuevo carrito en localStorage
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
    }
  }

    // Calculamos el precio total del carrito.
    const precioTotal = carrito.reduce((total, productoCarrito) => total + productoCarrito.precio, 0)


    // Funcionalidad para comprar.
    const comprar = () => {
    setCarrito([]); // Vaciar el carrito tras la compra
    localStorage.setItem("carrito", JSON.stringify([])); // Actualizar localStorage
    window.alert("Carrito comprado, muchas gracias!"); // Alerta.
  };

    

    // Le pasamos la funcion eliminar carrito y el indice a cardCarrito, un cacho separar los componentes.
    return (
        <Container className=" mb-5">
          <h3 style={{backgroundColor: '#fafafaff'}} >Precio total: ${precioTotal} </h3>
          <Button onClick={comprar} >Comprar</Button>
          <p className='mt-3' />
          {carrito.map((productoCarrito, index) => (
              <div key={`${productoCarrito.id}-${index}`} className="mb-3">
                  <CardCarrito producto={productoCarrito} eliminarDelCarrito={eliminarDelCarrito} />
              </div>
          ))}
        </Container>
    )
}

export default ListaCarrito
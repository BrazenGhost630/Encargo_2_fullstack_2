import { Col, Container, Row, Nav } from "react-bootstrap";
import CardProducto from "./CardProducto";
import React, { useContext, useState, useEffect } from 'react';

// Importamos para conectarnos al backend
import { productoService } from "../services/productoService.js"


// Lista que muestra las cartas que contienen los productos del catalogo.
function ListaCatalogo(){

    // Estado que usamos para redirigir.
    const categorias = [
    { id: 'torta', nombre: 'torta' },
    { id: 'pan', nombre: 'pan' },
    { id: 'galleta', nombre: 'galleta' },
    { id: 'cafe', nombre: 'cafe' }
    ];

    // Función para manejar el desplazamiento suave
    const moverASeccion = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // buscamos los datos del contexto
    // const productosPrueba = useContext(BaseDeDatosContext);

    // Creamos un estado para guardar ahí los productos del backend.
    const [catalogo, setCatalogo] = useState({
        tortas: [],
        panes: [],
        galletas: [],
        cafes: []
    })

    // Buscamos los datos del backend
    const loadCatalogo = async () => {
        try {
            const res = await productoService.getCatalogo();
            console.log("Respuesta del backend:", res); // ← Revisar toda la respuesta
            const productos = res.data;
            console.log("Productos recibidos:", productos); // ← Ver solo los datos

            // Aquí puedes filtrar por categoría
            const tortas = productos.filter(p => p.categoria === "torta");
            console.log("Tortas:", tortas);

            setCatalogo({
                tortas:   productos.filter(p => p.categoria === "torta"),
                panes:    productos.filter(p => p.categoria === "pan"),
                galletas: productos.filter(p => p.categoria === "galleta"),
                cafes:    productos.filter(p => p.categoria === "cafe")
            });
        } catch (error) {
            console.error("Error cargando el catálogo:", error);
        }
    };




    // Cuando se carga la pagina se cargan todos los productos.
    useEffect(() => { // LLama la función asíncrona
        loadCatalogo();
    }, []);
    

    // Toda la implementacion de como se ven los productos en la lista se hace en el componente CardProduct
    // {listaProductos.map((producto) =>: Significa que mapeamos cada producto de la lista, cada diccionario de la lista 
    return (
        <Container  fluid style={{ minHeight: '100vh' }}>
            {/** menu fijo */}
            <div>
                <Row >
                    <Nav className=" menu-fijo" style={{ position: 'sticky', top: '20px' }}>
                        {categorias.map((categoria) => (
                        <Nav.Link
                            key={categoria.id}
                            onClick={() => moverASeccion(categoria.id)}
                            className="menu-item"
                        >
                            {categoria.nombre}
                        </Nav.Link>
                        ))}
                    </Nav>
                </Row>
            </div>
            

            {/** contenido del catalogo */}
            <Row>
                <Col>
                    <div id="torta">
                        <h1>Tortas</h1>
                        <h3>Precios por unidad</h3>
                        <Row className="justify-content-center mb-5">
                            {catalogo.tortas.map((producto) => (
                                <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                                    <CardProducto producto={producto} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div id="pan">
                        <h1>Panes</h1>
                        <h3>Precios por kilo</h3>
                        <Row className="justify-content-center mb-5">
                            {catalogo.panes.map((producto) => (
                                <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                                    <CardProducto producto={producto} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div id="galleta">
                        <h1>Galletas</h1>
                        <h3>Precios por docena</h3>
                        <Row className="justify-content-center mb-5">
                            {catalogo.galletas.map((producto) => (
                                <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                                    <CardProducto producto={producto} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div id="cafe">
                        <h1>Cafés</h1>
                        <h3>Precios por unidad</h3>
                        <Row className="justify-content-center mb-5">
                            {catalogo.cafes.map((producto) => (
                                <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                                    <CardProducto producto={producto} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        
    );
}

export default ListaCatalogo
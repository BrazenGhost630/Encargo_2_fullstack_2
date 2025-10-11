import { Col, Row } from "react-bootstrap"
import CardProducto from "./CardProducto"
import { Card } from 'react-bootstrap';

// Importamos las imagenes de la carpeta images.
import chocolate from "../images/chocolate.jpg"
import cremaVolteada from "../images/cremaVolteada.jpg"
import milHoja from "../images/milHoja.jpg"
import kuchenNuez from "../images/kuchenNuez.webp"
import pieLimon from "../images/pieLimon.avif"
import selvaNegra from "../images/selvaNegra.jfif"
import strudel from "../images/strudel.jpg"
import tortaCafe from "../images/tortaCafe.jpg"
import tresLeches from "../images/tresLeches.jpeg"




// Lista que muestra las cartas que contienen los productos del catalogo.
function ListaCatalogo(){

    // Creamos una lista que contiene diccionarios Producto, aca recibimos los datos del local storage o el backend usando REST
    const listaProductos = [
        {id: "1", nombre: "mil_hoja", precio: 16000, url: milHoja},
        {id: "2", nombre: "Strudel de manzana", precio: 21000, url: strudel},
        {id: "3", nombre: "t_3_leches", precio: 18000, url: tresLeches},
        {id: "4", nombre: "Pie de limón", precio: 18000, url: pieLimon},
        {id: "5", nombre: "Kuchen de nuez", precio: 17000, url: kuchenNuez},
        {id: "6", nombre: "Selva negra", precio: 16000, imagen: selvaNegra},
        {id: "7", nombre: "Torta de Chocolate" ,precio: 15000, imagen: chocolate},
        {id: "8", nombre: "Torta de Café", precio: 15000, imagen: tortaCafe},
        {id: "9", nombre: "Crema Volteada", precio: 14000, imagen: cremaVolteada}
    ]
    

    // Toda la implementacion de como se ven los productos en la lista se hace en el componente CardProduct
    // {listaProductos.map((producto) =>: Significa que mapeamos cada producto de la lista, cada diccionario de la lista 
    return (
    <Row className="justify-content-center">
        {listaProductos.map((producto) => (
            <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                <CardProducto producto={producto} />
            </Col>
        ))}
    </Row>
    );
}

export default ListaCatalogo
import { Container, Row, Col } from "react-bootstrap";
import CardCarrito from "./cardCarrito";

import milHoja from "../images/milHoja.jpg";
import strudel from "../images/strudel.jpg";
import pieLimon from "../images/pieLimon.avif";
import tresLeches from "../images/tresLeches.jpeg";



// Lista de productos en el carrito.
function ListaCarrito(){

    // Por ahora vamos a tener los datos acá, despues los vamos a sacar usando REST.
    const carrito = {
        id: "1",
        productos: [
            {id: "1", nombre: "mil_hoja", precio: 16000, url: milHoja},
            {id: "2", nombre: "Strudel de manzana", precio: 21000, url: strudel},
            {id: "3", nombre: "t_3_leches", precio: 18000, url: tresLeches},
            {id: "4", nombre: "Pie de limón", precio: 18000, url: pieLimon}
        ]
    }


    return (
        <Container className=" mb-5">
            {carrito.productos.map((productoCarrito) => (
                <div key={productoCarrito.id} className="mb-3" >
                    <CardCarrito producto={productoCarrito} />
                </div>
            ))}
        </Container>
    )
}

export default ListaCarrito
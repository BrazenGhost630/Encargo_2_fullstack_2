import { Children } from "react"
import { Container, Row, Col } from "react-bootstrap"



// Fondo, este contenedor es donde va todo lo demas y tiene la imagen de fondo que queremos.
const ImagenFondo = ({ children }) => {
    return (
        <Container
            fluid // Es para que ocupe toda la pantalla
            className="my-4"
            style={{
                backgroundImage: 'url("https://previews.123rf.com/images/saenal78/saenal781601/saenal78160100012/50848547-seamless-pattern-with-bread-and-wheat-hand-drawn-bakery-background-vector-illustration.jpg")',
                backgroundSize: "cover", // Cubir pantalla
                backgroundPosition: "center", // Centrar.
                backgroundRepeat: "no-repeat", // No repetir la imagen para llenar espacio
                minHeight: "100vh" // Altura minima.
            }}
        >
            <Row className="align-items-center">
                <Col>
                    { children } {/* Renderiza el contenido pasado como hijos. */}
                </Col>
            </Row>
        </Container>
    )
}

export default ImagenFondo
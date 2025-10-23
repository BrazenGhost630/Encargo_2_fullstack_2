import { Col, Container, Row, Nav } from "react-bootstrap";
import CardProducto from "./CardProducto";

// Importamos las imagenes de la carpeta images.
import chocolate from "../images/chocolate.jpg";
import cremaVolteada from "../images/cremaVolteada.jpg";
import milHoja from "../images/milHoja.jpg";
import kuchenNuez from "../images/kuchenNuez.webp";
import pieLimon from "../images/pieLimon.avif";
import selvaNegra from "../images/selvaNegra.jfif";
import strudel from "../images/strudel.jpg";
import tortaCafe from "../images/tortaCafe.jpg";
import tresLeches from "../images/tresLeches.jpeg";




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


    // Creamos una lista que contiene diccionarios Producto, aca recibimos los datos del local storage o el backend usando REST
    const listaProductos = [
        {id: "1", nombre: "mil_hoja", precio: 16000, url: milHoja, caterogia: "torta"},
        {id: "2", nombre: "Strudel de manzana", precio: 21000, url: strudel, caterogia: "torta"},
        {id: "3", nombre: "t_3_leches", precio: 18000, url: tresLeches, caterogia: "torta"},
        {id: "4", nombre: "Pie de limón", precio: 18000, url: pieLimon, caterogia: "torta"},
        {id: "5", nombre: "Kuchen de nuez", precio: 17000, url: kuchenNuez, caterogia: "torta"},
        {id: "6", nombre: "Selva negra", precio: 16000, url: selvaNegra, caterogia: "torta"},
        {id: "7", nombre: "Torta de Chocolate" ,precio: 15000, url: chocolate, caterogia: "torta"},
        {id: "8", nombre: "Torta de Café", precio: 15000, url: tortaCafe, caterogia: "torta"},
        {id: "9", nombre: "Crema Volteada", precio: 14000, url: cremaVolteada, caterogia: "torta"},
        
        {id: 'marraqueta', nombre: 'Marraqueta', precio: 1700, url: "https://comerciante.lacuarta.com/wp-content/uploads/2022/05/Marraqueta-Tema-1-ok.jpg", caterogia: "pan"},
        {id: "panhuevo", nombre: "Pan de huevo", precio: 2400, url: "https://www.tipicochileno.cl/wp-content/uploads/2021/05/pan-de-huevo-1200-628.jpg", categoria: "pan"},
        {id: "dobladita", nombre: "Dobladita de queso", precio: 1900, url: "https://tiendaelchileno.com/wp-content/uploads/2024/12/dobladita-pagina-web.jpeg", categoria: "pan"},
        {id: "medialuna", nombre: "Medialuna", precio: 4600, url: "https://cocinerosargentinos.com/content/recipes/original/recipes.12138.jpeg", categoria: "pan"},
        {id: "hallulla", nombre: "Hallulla", precio: 1600, url: "https://tofuu.getjusto.com/orioneat-local/resized2/XSCcrg3DdfEDenF9o-2400-x.webp", categoria: "pan"},
        {id: "baguette", nombre: "Baguette", precio: 3000, url: "https://www.recetasdepan.net/wp-content/uploads/2019/05/Receta-de-pan-baguette.jpg", categoria: "pan"},
        {id: "bocadodedama", nombre: "Bocado de dama", precio: 2100, url: "https://masapan.cl/cdn/shop/files/Bocado_de_dama_en_temuco_11zon.webp?v=1724895309", categoria: "pan"},
        
        {id: "corazones", nombre: "Galletas de corazon", precio: 2000, url: "https://www.dagusto.com.co/wp-content/uploads/2020/11/galletas-imagen-cuerpo.jpg", categoria: "galleta"},
        {id: "g_chocolate", nombre: "Galletas chocolate", precio: 2000, url: "https://cdn7.kiwilimon.com/recetaimagen/31079/640x640/35433.jpg.jpg", categoria: "galleta"},
        {id: "magdalenas", nombre: "Magdalenas", precio: 2000, url: "https://www.onceuponachef.com/images/2022/10/madeleines-760x960.jpg", categoria: "galleta"},
        {id: "palmeritas", nombre: "Palmeritas", precio: 2000, url: "https://cdn0.uncomo.com/es/posts/7/0/8/como_hacer_palmeritas_39807_orig.jpg", categoria: "galleta"},
        {id: "choco_blanco", nombre: "Galletas choco blanco", precio: 2000, url: "https://farm5.staticflickr.com/4736/38190985724_7cfe37a26d_b.jpg", categoria: "galleta"},
        
        {id: "late", nombre: "Café latte", precio: 2100, url: "https://images.ctfassets.net/0e6jqcgsrcye/53teNK4AvvmFIkFLtEJSEx/4d3751dcad227c87b3cf6bda955b1649/Cafe_au_lait.jpg", categoria: "cafe"},
        {id: "americano", nombre: "Café americano", precio: 1800, url: "https://excelso77.com/wp-content/uploads/2024/05/por-que-el-cafe-americano-se-llama-asi-te-lo-contamos.webp", categoria: "cafe"},
        {id: "moca", nombre: "Café mocaccino", precio: 2600, url: "https://www.cabucoffee.com/newimages/Cafe-Moca.jpg", categoria: "cafe"},
        {id: "helado", nombre: "Café helado", precio: 3200, url: "https://osterstatic.reciperm.com/webp/10230.webp", categoria: "cafe"}
    ]

    // Creamos las listas por categoría.
    const tortas = [
        {id: "1", nombre: "mil_hoja", precio: 16000, url: milHoja, caterogia: "torta"},
        {id: "2", nombre: "Strudel de manzana", precio: 21000, url: strudel, caterogia: "torta"},
        {id: "3", nombre: "t_3_leches", precio: 18000, url: tresLeches, caterogia: "torta"},
        {id: "4", nombre: "Pie de limón", precio: 18000, url: pieLimon, caterogia: "torta"},
        {id: "5", nombre: "Kuchen de nuez", precio: 17000, url: kuchenNuez, caterogia: "torta"},
        {id: "6", nombre: "Selva negra", precio: 16000, url: selvaNegra, caterogia: "torta"},
        {id: "7", nombre: "Torta de Chocolate" ,precio: 15000, url: chocolate, caterogia: "torta"},
        {id: "8", nombre: "Torta de Café", precio: 15000, url: tortaCafe, caterogia: "torta"},
        {id: "9", nombre: "Crema Volteada", precio: 14000, url: cremaVolteada, caterogia: "torta"}
    ]
    const panes = [
        {id: 'marraqueta', nombre: 'Marraqueta', precio: 1700, url: "https://comerciante.lacuarta.com/wp-content/uploads/2022/05/Marraqueta-Tema-1-ok.jpg", caterogia: "pan"},
        {id: "panhuevo", nombre: "Pan de huevo", precio: 2400, url: "https://www.tipicochileno.cl/wp-content/uploads/2021/05/pan-de-huevo-1200-628.jpg", categoria: "pan"},
        {id: "dobladita", nombre: "Dobladita de queso", precio: 1900, url: "https://tiendaelchileno.com/wp-content/uploads/2024/12/dobladita-pagina-web.jpeg", categoria: "pan"},
        {id: "medialuna", nombre: "Medialuna", precio: 4600, url: "https://cocinerosargentinos.com/content/recipes/original/recipes.12138.jpeg", categoria: "pan"},
        {id: "hallulla", nombre: "Hallulla", precio: 1600, url: "https://tofuu.getjusto.com/orioneat-local/resized2/XSCcrg3DdfEDenF9o-2400-x.webp", categoria: "pan"},
        {id: "baguette", nombre: "Baguette", precio: 3000, url: "https://www.recetasdepan.net/wp-content/uploads/2019/05/Receta-de-pan-baguette.jpg", categoria: "pan"},
        {id: "bocadodedama", nombre: "Bocado de dama", precio: 2100, url: "https://masapan.cl/cdn/shop/files/Bocado_de_dama_en_temuco_11zon.webp?v=1724895309", categoria: "pan"}
    ]
    const galletas = [
        {id: "corazones", nombre: "Galletas de corazon", precio: 2000, url: "https://www.dagusto.com.co/wp-content/uploads/2020/11/galletas-imagen-cuerpo.jpg", categoria: "galleta"},
        {id: "g_chocolate", nombre: "Galletas chocolate", precio: 2000, url: "https://cdn7.kiwilimon.com/recetaimagen/31079/640x640/35433.jpg.jpg", categoria: "galleta"},
        {id: "magdalenas", nombre: "Magdalenas", precio: 2000, url: "https://www.onceuponachef.com/images/2022/10/madeleines-760x960.jpg", categoria: "galleta"},
        {id: "palmeritas", nombre: "Palmeritas", precio: 2000, url: "https://cdn0.uncomo.com/es/posts/7/0/8/como_hacer_palmeritas_39807_orig.jpg", categoria: "galleta"},
        {id: "choco_blanco", nombre: "Galletas choco blanco", precio: 2000, url: "https://farm5.staticflickr.com/4736/38190985724_7cfe37a26d_b.jpg", categoria: "galleta"}
    ]
    const cafes = [
        {id: "late", nombre: "Café latte", precio: 2100, url: "https://images.ctfassets.net/0e6jqcgsrcye/53teNK4AvvmFIkFLtEJSEx/4d3751dcad227c87b3cf6bda955b1649/Cafe_au_lait.jpg", categoria: "cafe"},
        {id: "americano", nombre: "Café americano", precio: 1800, url: "https://excelso77.com/wp-content/uploads/2024/05/por-que-el-cafe-americano-se-llama-asi-te-lo-contamos.webp", categoria: "cafe"},
        {id: "moca", nombre: "Café mocaccino", precio: 2600, url: "https://www.cabucoffee.com/newimages/Cafe-Moca.jpg", categoria: "cafe"},
        {id: "helado", nombre: "Café helado", precio: 3200, url: "https://osterstatic.reciperm.com/webp/10230.webp", categoria: "cafe"}
    ]
    

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
                        <Row className="justify-content-center mb-5">
                            {tortas.map((producto) => (
                                <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                                    <CardProducto producto={producto} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div id="pan">
                        <h1>Panes</h1>
                        <Row className="justify-content-center mb-5">
                            {panes.map((producto) => (
                                <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                                    <CardProducto producto={producto} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div id="galleta">
                        <h1>Galletas</h1>
                        <Row className="justify-content-center mb-5">
                            {galletas.map((producto) => (
                                <Col className="justify-content-center" key={producto.id} xs={12} sm={6} md={4} lg={4}>
                                    <CardProducto producto={producto} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div id="cafe">
                        <h1>Cafés</h1>
                        <Row className="justify-content-center mb-5">
                            {cafes.map((producto) => (
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
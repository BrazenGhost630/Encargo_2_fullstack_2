import React from 'react';
import { Carousel } from 'react-bootstrap';


// Importacion de imaganes locales
import cremaVolteada from "../images/cremaVolteada.jpg";



function Carrusel(){
    return (
        <Carousel
            fade = {false}  // Efecto fade, opcional.
            pause = 'hover'  // Para cuando el maus pasa por encima.
            interval = {3000}  // Tiempo de cambio de las diapositivas.
            controls = {true}  // Muestra flechas.
            indicators = {true}  // Muestra un punto abajo por cada diapositiva.
        >
            {/** Diapositivas. */}

            {/** Diapositiva 1. */}
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src="https://www.onceuponachef.com/images/2022/10/madeleines-760x960.jpg"
                    alt='primera diapositiva'
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Oferta semanal</h3>
                    <p>Galletas de la semana!.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/** Diapositiva 2. */}
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src = {cremaVolteada}
                    alt='segunda diapositiva'
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Oferta mensual</h3>
                    <p>Pastel del mes!.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/** Diapositiva 3. */}
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src='https://www.latercera.com/resizer/v2/4CL4KYTLXRHLVM5UJ3RCOWUPPI.jpg?auth=a0f4d4e7a6d682f6911ec437c722a5680b70942ef13e6123e61a018a92342404&smart=true&width=800&height=450&quality=70'
                    alt='tercera diapositiva'
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Pronta aperturta nueva tienda!</h3>
                    <p>Visitenos en nuestra nueva tienda el -Fecha-!.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrusel;
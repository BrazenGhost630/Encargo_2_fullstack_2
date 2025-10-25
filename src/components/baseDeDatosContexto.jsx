import { createContext, useEffect, useState } from "react";


// Aun no funciona, intenta setearlo para que sea solo un producto


// URL para el fetch
const url = "http://demo5784683.mockable.io/catalogo/producto1";

// Creamos el contexto con un valor inicial vacío (puede ser un arreglo vacío o undefined)
export const BaseDeDatosContext = createContext({
  tortas: [],
  panes: [],
  galletas: [],
  cafes: []
});

// Componente proveedor para manejar el estado y el contexto
export const BaseDeDatosProvider = ({ children }) => {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState({
    tortas: [],
    panes: [],
    galletas: [],
    cafes: []
  });

  // useEffect para realizar el fetch
  useEffect(() => { 
    const fetchProductos = async () => {
      try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <BaseDeDatosContext.Provider value={productos}>
      {children}
    </BaseDeDatosContext.Provider>
  );
};
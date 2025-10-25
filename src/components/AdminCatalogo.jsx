import { useEffect, useState } from "react";

export default function AdminCatalogo() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://demo1029291.mockable.io/productos")
      .then(res => res.json())
      .then(data => setProductos(data.productos))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Gestión de Productos</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id}>
            {p.nombre} - ${p.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
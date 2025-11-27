import { useEffect, useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';

export default function AdminCatalogo() {
  const [productos, setProductos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    precio: 0,
    url: '',
    resena: '',
    categoria: 'torta',
  });

  const API_URL = 'http://54.89.13.60:8080/catalogo';

  const fetchProductos = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleClose = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ nombre: '', precio: 0, url: '', resena: '', categoria: 'torta' });
  };

  const handleShow = () => setShowForm(true);

  const handleCreate = () => {
    setEditingId(null);
    setFormData({ nombre: '', precio: 0, url: '', resena: '', categoria: 'torta' });
    handleShow();
  };

  const handleEdit = product => {
    setEditingId(product.id);
    setFormData(product);
    handleShow();
  };

  const handleDelete = id => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.ok) {
            fetchProductos(); 
          } else {
            throw new Error('Error al eliminar');
          }
        })
        .catch(err => console.error(err));
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const url = editingId ? `${API_URL}/${editingId}` : API_URL;
    const method = editingId ? 'PUT' : 'POST';

    const body = { ...formData, precio: parseFloat(formData.precio) };

    if (!editingId) {
      delete body.id; // No enviar el ID al crear un nuevo producto
    }

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(async res => {
        if (!res.ok) {
          // Si la respuesta no es OK, intenta leer el cuerpo como texto para obtener más detalles.
          const errorText = await res.text();
          throw new Error(`Error del servidor: ${res.status} ${res.statusText}. Detalles: ${errorText}`);
        }
        // Si la respuesta es OK, puede que no tenga cuerpo (ej. en un 204 No Content)
        // o sí (en un 200 OK o 201 Created).
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res.json();
        }
      })
      .then(data => {
        handleClose();
        fetchProductos();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Gestión de Productos</h2>
      <Button variant="primary" onClick={handleCreate} className="mb-3">
        Crear Nuevo Producto
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>${product.precio}</td>
              <td>{product.categoria}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(product)} className="me-2">
                  Editar
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingId ? 'Editar Producto' : 'Crear Producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3"><Form.Label>Nombre</Form.Label><Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} required /></Form.Group>
            <Form.Group className="mb-3"><Form.Label>Precio</Form.Label><Form.Control type="number" name="precio" value={formData.precio} onChange={handleChange} required /></Form.Group>
            <Form.Group className="mb-3"><Form.Label>Categoría</Form.Label><Form.Select name="categoria" value={formData.categoria} onChange={handleChange}><option value="torta">Torta</option><option value="pan">Pan</option><option value="galleta">Galleta</option><option value="cafe">Café</option></Form.Select></Form.Group>
            <Form.Group className="mb-3"><Form.Label>URL de Imagen</Form.Label><Form.Control type="text" name="url" value={formData.url} onChange={handleChange} required /></Form.Group>
            <Form.Group className="mb-3"><Form.Label>Reseña</Form.Label><Form.Control as="textarea" rows={3} name="resena" value={formData.resena} onChange={handleChange} /></Form.Group>
            <Button variant="primary" type="submit">
              {editingId ? 'Actualizar' : 'Guardar'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

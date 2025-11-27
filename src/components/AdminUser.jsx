import { useEffect, useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';

export default function AdminUser() {
  const [usuarios, setUsuarios] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    referencia: '',
    email: '',
    contrasenia: '',
    rol: 'user',
  });

  const API_URL = 'http://54.89.13.60:8080/clientes';

  const fetchUsuarios = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleClose = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ nombre: '', apellido: '', direccion: '', referencia: '', email: '', contrasenia: '', rol: 'user' });
  };

  const handleShow = () => setShowForm(true);

  const handleCreate = () => {
    setEditingId(null);
    setFormData({ nombre: '', apellido: '', direccion: '', referencia: '', email: '', contrasenia: '', rol: 'user' });
    handleShow();
  };

  const handleEdit = user => {
    setEditingId(user.id);
    setFormData({ ...user, contrasenia: '' }); // No mostramos la contraseña actual
    handleShow();
  };

  const handleDelete = id => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.ok) {
            fetchUsuarios(); // Recargar usuarios
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

    const body = { ...formData };
    if (!editingId) {
      delete body.id; // Elimina el ID si estamos creando
    }
    if (editingId && !body.contrasenia) {
      delete body.contrasenia;
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
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res.json();
        }
      })
      .then(data => {
        handleClose();
        fetchUsuarios();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <Button variant="primary" onClick={handleCreate} className="mb-3">
        Crear Nuevo Usuario
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(user)} className="me-2">
                  Editar
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingId ? 'Editar Usuario' : 'Crear Usuario'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Referencia</Form.Label>
              <Form.Control type="text" name="referencia" value={formData.referencia} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="contrasenia" value={formData.contrasenia} onChange={handleChange} placeholder={editingId ? 'Dejar en blanco para no cambiar' : ''} required={!editingId} />

              <Form.Text className="text-muted">
                Debe tener al menos 8 caracteres.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select name="rol" value={formData.rol} onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              {editingId ? 'Actualizar' : 'Guardar'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

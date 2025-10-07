import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Boton_1 from '../components/Botonprueba';


function Formulario({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (onLogin) {
      onLogin(email, password);
    }
  };

  return (
     <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', background: '#f8f8f8ff' }}
    >
      <div
        className="p-5 shadow rounded"
        style={{ background: 'rgba(245, 245, 245, 1)', minWidth: 350, maxWidth: 400 }}
      >
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
        
          placeholder="Ingresa tu email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
      
      <Boton_1/>
    </Form>
      </div>
    </div>
  );
}

export default Formulario;
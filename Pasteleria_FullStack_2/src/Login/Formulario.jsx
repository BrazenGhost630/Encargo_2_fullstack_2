import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Formulario({ onLogin }) {
  // Estados para guardar el email y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    // Llama a la función onLogin que recibes por props, pasando email y password
    if (onLogin) {
      onLogin(email, password);
    }
  };

  return (
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
    </Form>
  );
}

export default Formulario;
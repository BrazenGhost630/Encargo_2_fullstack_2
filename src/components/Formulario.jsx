import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Boton_1 from './Botonprueba';
import { useNavigate } from "react-router-dom";


function Formulario({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (email === "admin@admin.com" && password === "1234") {
      localStorage.setItem("auth", "true");
      navigate("/admin", { replace: true });
    }else {
      alert("Credenciales incorrectas");
    }

    if (onLogin) {
      onLogin(email, password);
    }
     

  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', background: 'rgba(248, 248, 248, 0.65)' }}>
      <div
        className="p-5 shadow rounded"
        style={{ background: 'rgba(243, 183, 238, 1)', minWidth: 750, maxWidth: 400 }}>

          <h1>Iniciar Sesion</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label >Email</Form.Label>
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
              onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <h5></h5>
           <div className="d-grid gap-2">
           <p style={{ textAlign: 'left' }}>
            No tienes cuenta,{' '}
            <a href="/registro">regístrate aquí</a>
            </p>
          <Button variant="primary" type="submit" >
            Iniciar sesión
          </Button>
          </div>
          
        </Form>
      </div>
    </div>
  );
}

export default Formulario;
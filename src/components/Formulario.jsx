import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../apis/Api_Felix.jsx';
import { useContext } from 'react';



function Formulario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const { login, error, loading } = useContext(LoginContext);


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const user = await login(email, password);

    if (user) {
      if (user.rol === "admin"){
       navigate("/admin", { replace: true })
      }
      else navigate("/perfil", { replace: true });
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
              onChange={e => setPassword(e.target.value)}
              required/>

          </Form.Group>
          
          <h5></h5>
          {error && <p className="text-danger">{error}</p>}
           <div className="d-grid gap-2">
           <p style={{ textAlign: 'left' }}>
            No tienes cuenta,{' '}
            <a href="/registro">regístrate aquí</a>
            </p>
          <Button variant="primary" type="submit" >
            {loading ? "Cargando..." : "Entrar"}
          </Button>
          
          </div>
          
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
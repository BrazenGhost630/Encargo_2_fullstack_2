import { useState, useContext } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../apis/Api_Felix.jsx';
import BotonInicioSesion from './BotonInicioSesion.jsx';

export default function RegistroInicio() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [lastname, setLastname] = useState('');
    const [direccion, setDireccion] = useState('');
    const [referencia, setReferencia] = useState('');

    const { register, loading, error } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !nombre || !direccion) {
            alert("Por favor completa los campos requeridos: Nombre, Dirección, Email y Contraseña.");
            return;
        }

        
        const datosUsuario = {
            nombre,
            apellido: lastname,
            direccion,
            referencia,
            email,
            contrasenia: password,
            rol: "user" 
        };

        const clienteGuardado = await register(datosUsuario);
        
        if (clienteGuardado) {
            alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
            navigate('/login'); 
        }
    };


  return (
    <div className="registro-inicio d-flex justify-content-center align-items-center"
      style={{ minHeight: '120vh', background: 'rgba(248, 248, 248, 0.65)' }}>

        <div
        className="p-5 shadow rounded"
        style={{ background: 'rgba(255, 209, 249, 1)', minWidth: 1000, maxWidth: 400 }}>
            <h1>Registrarse</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="formname">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
            
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label >Apellido</Form.Label>
            <Form.Control
              type="text"
            
              placeholder="Ingresa tu apellido"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formdireccion">
            <Form.Label >Dirección</Form.Label>
            <Form.Control
              type="text"
            
              placeholder="Ingresa tu dirección"
              value={direccion}
              onChange={e => setDireccion(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formreferencia">
            <Form.Label>Referencia del domicilio</Form.Label>
            <Form.Control 
              as="textarea"
              rows={3}
              placeholder="referencia del domicilio"
              value={referencia}
              onChange={e => setReferencia(e.target.value)}
              
            />
          </Form.Group >

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
                <Form.Label >Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size='lg' disabled={loading}>
              {loading ? "Registrando..." : "Registrarse"}
            </Button>
          </div>
          
        </Form>
        </div>
    </div>
  );
}
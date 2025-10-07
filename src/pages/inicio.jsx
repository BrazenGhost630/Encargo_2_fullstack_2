import React, { useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';

// Recuerda que acá toda función tiene que exportar.
function Inicio(){

    const [form, setForm] = useState({
        nombre: '',
        valparaiso: '',
        email: '',
        telefono: '',
        calle: '',
        password: '',
        confirmPassword: '',
        
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        

        
        alert('Formulario enviado');
    };
    return (
        <Container className="mt-4">
            <h1>Inicio</h1>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" style={{ textAlign: "left", display: "block" }}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" style={{ textAlign: "left", display: "block" }}>
                    <Form.Label>Comuna (Valparaíso- Viña del mar - Quilpue)</Form.Label>
                    <Form.Control
                        type="text"
                        name="valparaiso"
                        value={form.valparaiso}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" style={{ textAlign: "left", display: "block" }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" style={{ textAlign: "left", display: "block" }}>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" style={{ textAlign: "left", display: "block" }}>
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                        type="text"
                        name="calle"
                        value={form.calle}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" style={{ textAlign: "left", display: "block" }}>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" style={{ textAlign: "left", display: "block" }}>
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
           
            
        </Container>
    )
}

export default Inicio
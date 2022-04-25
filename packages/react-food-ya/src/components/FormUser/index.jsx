import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import CONFIG from '../../utils/host';

function FormUser() {
  const [userState, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${CONFIG.url}/api/client/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userState)
    });
    await response.json();
    navigate('/');
  };
  return (
    <Form className="form-user" onSubmit={handleSubmit}>
      <h1>Registrar</h1>
      <Form.Group as={Row} controlId="formFile" className="mb-3">
        <Col sm="6" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" name="surname" onChange={handleChange} />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="text" name="email" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="password" name="password_confirmation" onChange={handleChange} />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" name="dni" onChange={handleChange} />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" name="direction" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Distrito</Form.Label>
          <Form.Control type="text" name="district" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" name="city" onChange={handleChange} />
        </Col>
        <Button type="submit" className="Reg-button">
          Registrar
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FormUser;

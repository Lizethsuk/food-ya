/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useState } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './style.scss';

// import CustomButton from '../CustomButton';

function FormRestaurant() {
  const [restaurantState, setRestaurant] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurantState, [name]: value });
  };
  // if (restaurantState.password !== restaurantState.password_configuration) {
  //   navigate('/register-selection');
  // } else {
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurantState)
    });
    const responsejson = await response.json();
    console.log(responsejson);
    navigate('/');
  };

  return (
    <Form className="form-restaurant" onSubmit={handleSubmit}>
      <h1>Registrar</h1>
      <h2>Datos Personales</h2>
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
        <h2>Datos del Restaurant</h2>
        <Col sm="12" className="mb-3">
          <Form.Label>Razón Social</Form.Label>
          <Form.Control type="text" name="business_name" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>RUC</Form.Label>
          <Form.Control type="text" name="ruc" onChange={handleChange} />
        </Col>
        <Col sm="6" className="mb-3">
          <Form.Label>Teléfono del local</Form.Label>
          <Form.Control type="text" name="business_phone" onChange={handleChange} />
        </Col>
        <Col sm="12" className="mb-3">
          <Form.Label>Correo del local</Form.Label>
          <Form.Control type="text" name="business_email" onChange={handleChange} />
        </Col>
        <Col sm="12" className="mb-3">
          <Form.Label>Dirección del local</Form.Label>
          <Form.Control type="text" name="business_address" onChange={handleChange} />
        </Col>
        <Button type="submit" className="Reg-button">
          Registar
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FormRestaurant;

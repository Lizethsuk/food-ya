/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useState } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
// import CustomButton from '../CustomButton';

function FormUser() {
  const [userState, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userState),
    });
    const responsejson = await response.json();
    console.log(responsejson);
    navigate('/');
  };
  return (
    // <form className="FormRegister">
    //   <h1>Registrar</h1>
    //   <div className="Group">
    //     <Input name="name" type="text" label="Nombre" />
    //     <Input name="surname" type="text" label="Apellido" />
    //   </div>
    //   <Input name="email" type="email" label="Correo Electrónico" />
    //   <div className="Group">
    //     <Input name="pass" type="password" label="Contraseña" />
    //     <Input name="confpass" type="password" label="Confirmar Contraseña" />
    //   </div>
    //   <Input name="dni" type="number" label="DNI" />
    //   <Input name="direction" type="text" label="Dirección" />
    //   <div className="Group">
    //     <Input name="district" type="text" label="Distrito" />
    //     <Input name="city" type="text" label="Ciudad" />
    //   </div>
    //   <button type="submit" className="Reg-button">
    //     Registrar
    //   </button>
    //   <hr size="3px" color="black" />
    //   <IconContext.Provider value={{ size: '40px' }}>
    //     <a href="https://www.facebook.com/">
    //       <ImFacebook />
    //     </a>
    //     <a href="https://www.google.com/">
    //       <FcGoogle />
    //     </a>
    //   </IconContext.Provider>
    // </form>
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
          <Form.Control type="text" name="password" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="text" name="password_confirmation" onChange={handleChange} />
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

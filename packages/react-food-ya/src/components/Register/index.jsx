/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useState } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
// import CustomButton from '../CustomButton';

function Register() {
  const [userState, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userState.password !== userState.password_configuration) {
      navigate('/register-selection');
    } else {
      navigate('/');
    }
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
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formFile" className="mb-3">
        <Col sm="6" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" name="surname" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="text" name="email" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="text" name="password" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="text" name="password_configuration" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" name="dni" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" name="direction" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Distrito</Form.Label>
          <Form.Control type="text" name="district" placeholder="Normal text" onChange={handleChange} />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" name="city" placeholder="Normal text" onChange={handleChange} />
        </Col>
        <Button type="submit">Registar</Button>
      </Form.Group>
    </Form>
  );
}

export default Register;

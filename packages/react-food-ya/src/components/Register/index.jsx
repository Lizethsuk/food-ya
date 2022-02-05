/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useState } from 'react';
import React from 'react';
import {
  Form, Row, Col,
} from 'react-bootstrap';
import CustomButton from '../CustomButton';

function Register() {
  // const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  // const [confpass, setConfpass] = useState('');
  // const [dni, setDni] = useState('');
  // const [direction, setDirection] = useState('');
  // const [district, setDistrict] = useState('');
  // const [city, setCity] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const cases = {
  //     name: setName,
  //     surname: setSurname,
  //     email: setEmail,
  //     pass: setPass,
  //     confpass: setConfpass,
  //     dni: setDni,
  //     direction: setDirection,
  //     district: setDistrict,
  //     city: setCity,
  //   };
  //   cases[name](value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (pass !== confpass) {
  //     // alert('No coinciden las contraseñas');
  //   } else {
  //     // alert('usuario registrado');
  //   }
  // };
  // return (
  // <form onSubmit={handleSubmit} className="FormRegister">
  //   <h1>Registrar</h1>
  //   <div className="Group">
  //     <Input name="name" type="text" label="Nombre" onChange={handleChange} />
  //     <Input
  //       name="surname"
  //       type="text"
  //       label="Apellido"
  //       onChange={handleChange}
  //     />
  //   </div>
  //   <Input
  //     name="email"
  //     type="email"
  //     label="Correo Electrónico"
  //     onChange={handleChange}
  //   />
  //   <div className="Group">
  //     <Input
  //       name="pass"
  //       type="password"
  //       label="Contraseña"
  //       onChange={handleChange}
  //     />
  //     <Input
  //       name="confpass"
  //       type="password"
  //       label="Confirmar Contraseña"
  //       onChange={handleChange}
  //     />
  //   </div>
  //   <Input name="dni" type="number" label="DNI" onChange={handleChange} />
  //   <Input
  //     name="direction"
  //     type="text"
  //     label="Dirección"
  //     onChange={handleChange}
  //   />
  //   <div className="Group">
  //     <Input
  //       name="district"
  //       type="text"
  //       label="Distrito"
  //       onChange={handleChange}
  //     />
  //     <Input name="city" type="text" label="Ciudad" onChange={handleChange} />
  //   </div>
  //   <button type="submit" className="Reg-button">
  //     Registrar
  //   </button>
  //   <hr size="3px" color="black" />
  //   <IconContext.Provider value={{ size: '40px' }}>
  //     <a href="https://www.facebook.com/">
  //       <ImFacebook2 />
  //     </a>
  //     <a href="https://www.google.com/">
  //       <FcGoogle />
  //     </a>
  //   </IconContext.Provider>
  // </form>
  // );

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
    <Form>
      <Form.Group as={Row} controlId="formFile" className="mb-3">
        <Col sm="6" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="12" className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Distrito</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>

        <Col sm="6" className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>
        <CustomButton />
      </Form.Group>
    </Form>
  );
}

export default Register;

/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { IconContext } from 'react-icons';
import Input from '../Input';

function Register() {
  return (
    <form className="FormRegister">
      <h1>Registrar</h1>
      <div className="Group">
        <Input name="name" type="text" label="Nombre" />
        <Input name="surname" type="text" label="Apellido" />
      </div>
      <Input name="email" type="email" label="Correo Electrónico" />
      <div className="Group">
        <Input name="pass" type="password" label="Contraseña" />
        <Input name="confpass" type="password" label="Confirmar Contraseña" />
      </div>
      <Input name="dni" type="number" label="DNI" />
      <Input name="direction" type="text" label="Dirección" />
      <div className="Group">
        <Input name="district" type="text" label="Distrito" />
        <Input name="city" type="text" label="Ciudad" />
      </div>
      <button type="submit" className="Reg-button">
        Registrar
      </button>
      <hr size="3px" color="black" />
      <IconContext.Provider value={{ size: '40px' }}>
        <a href="https://www.facebook.com/">
          <ImFacebook2 />
        </a>
        <a href="https://www.google.com/">
          <FcGoogle />
        </a>
      </IconContext.Provider>
    </form>
  );
}

export default Register;

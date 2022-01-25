import React from 'react';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import './style.scss';

function SignIn() {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h2 className="sign-in-title">Sign In</h2>
        <form className="sign-in-option-container">
          <Input name="email" label="Correo electrónico" type="text" />
          <Input name="password" label="Contraseña" type="password" />
          <CustomButton content="Sign In" url="/" buttonStyle="fit-content-button" />
        </form>
      </div>
    </div>
  );
}
export default SignIn;

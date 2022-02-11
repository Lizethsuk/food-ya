import React from 'react';
import RegisterOption from '../../components/RegisterOption';
import './style.scss';
import CustomButton from '../../components/CustomButton';

function RegisterSelection() {
  return (
    <div className="register-selection-page">

      <div className="register-container">
        <h2 className="register-title">Elija que perfil desea crear</h2>
        <div className="register-option-container">
          <RegisterOption
            imgContent="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f37288f1ff264310c703ea536190f79c.svg "
            text="Registra tu restaurante"
            content="Restaurante"
            url="/register"
          />
          <RegisterOption
            imgContent="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d68c5f5ddd33d16a8d6855987410673b.svg"
            text="Registrate para pedir"
            content="Usuario"
            url="/register"
          />
        </div>
        <CustomButton content="Sign In" buttonStyle="fit-content-button margin" url="/sign-in" />
      </div>
    </div>
  );
}
export default RegisterSelection;

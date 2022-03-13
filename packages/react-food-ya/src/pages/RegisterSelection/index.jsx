import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Option from '../../components/Option';
import './style.scss';
import CustomButton from '../../components/CustomButton';

function RegisterSelection() {
  return (
    <div className="register-selection-page">
      <div className="register-container">
        <h2 className="register-title">Elija que perfil desea crear</h2>
        <Container>
          <Row>
            <Option
              imgContent="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f37288f1ff264310c703ea536190f79c.svg "
              text="Registra tu restaurante"
              content="Restaurante"
              url="/register-restaurant"
            />
            <Option
              imgContent="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d68c5f5ddd33d16a8d6855987410673b.svg"
              text="Registrate para pedir"
              content="Usuario"
              url="/register-user"
            />
          </Row>
        </Container>
        <CustomButton
          content="Sign In"
          buttonStyle="fit-content-button margin"
          url="/sign-in-selection"
        />
      </div>
    </div>
  );
}
export default RegisterSelection;

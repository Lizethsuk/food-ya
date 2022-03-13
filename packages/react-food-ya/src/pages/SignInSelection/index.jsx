import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Option from '../../components/Option';
import './style.scss';
import CustomButton from '../../components/CustomButton';

function SignInSelection() {
  return (
    <div className="register-selection-page">
      <div className="register-container">
        <h2 className="register-title">Elija su tipo de perfil</h2>
        <Container>
          <Row>
            <Option
              imgContent="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f37288f1ff264310c703ea536190f79c.svg "
              text="Soy un restaurante"
              content="Restaurante"
              url="/sign-in-restaurant"
            />
            <Option
              imgContent="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d68c5f5ddd33d16a8d6855987410673b.svg"
              text="Soy un usuario"
              content="Usuario"
              url="/sign-in-user"
            />
          </Row>
        </Container>
        <CustomButton
          content="Register"
          buttonStyle="fit-content-button margin"
          url="/register-selection"
        />
      </div>
    </div>
  );
}
export default SignInSelection;

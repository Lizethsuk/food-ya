import React, { useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
// import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import './style.scss';
import { UserContext } from '../../context/userContext';

function SignIn() {
  const { ChangeTokenState } = useContext(UserContext);
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h2 className="sign-in-title">Iniciar Sesión</h2>
        <h3 className="sign-in-subtitle">Restaurante</h3>
        <Form className="sign-in-option-container">
          <Form.Group as={Row} controlId="formFile" className="mb-3">
            <Col>
              <Col sm="12" className="mb-3 m-auto">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="text" placeholder="foodya@foodya.com" />
              </Col>

              <Col sm="12" className="mb-3 m-auto">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="**********" />
              </Col>
            </Col>
            <CustomButton content="Sign In" url="/home" buttonStyle="fit-content-button" callback={ChangeTokenState} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
export default SignIn;

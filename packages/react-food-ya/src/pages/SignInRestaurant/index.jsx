import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import CONFIG from '../../utils/host';

const login = async (credentials) => {
  const response = await fetch(`${CONFIG.url}/api/restaurant/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return response.json();
};

function SignIn() {
  const [userState, setUser] = useState({});
  const { ChangeTokenState } = useContext(UserContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userState, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(userState);
      ChangeTokenState(user.token, user.name, user.type, user.id);
      navigate('/');
    } catch {
      console.log('no logeo');
    }
  };
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h2 className="sign-in-title">Iniciar Sesión</h2>
        <h3 className="sign-in-subtitle">Restaurante</h3>
        <Form className="sign-in-option-container" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Col sm="12" className="mb-3 m-auto">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="foodya@foodya.com"
                  onChange={handleChange}
                />
              </Col>

              <Col sm="12" className="mb-3 m-auto">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="**********"
                  onChange={handleChange}
                />
              </Col>
            </Col>
            <Button type="submit" className="Reg-button">
              Sign In
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
export default SignIn;

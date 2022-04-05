/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useState } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form, Row, Col, Button, Modal, Container,
} from 'react-bootstrap';
import './style.scss';

// import CustomButton from '../CustomButton';

function FormRestaurant() {
  const [restaurantState, setRestaurant] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurantState, [name]: value });
  };
  // if (restaurantState.password !== restaurantState.password_configuration) {
  //   navigate('/register-selection');
  // } else {
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurantState),
    });
    const responsejson = await response.json();
    console.log(responsejson);
    /*    navigate('/'); */
    setTimeout((() => { navigate('/'); }), 3500);
  };

  return (
    <Form className="form-restaurant" onSubmit={handleSubmit}>
      <h1 className="mb-4">Registrar</h1>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <Form.Group as={Row} className="mb-3">
              <Col sm="12" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" onChange={handleChange} />
              </Col>

              <Col sm="12" className="mb-3">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" name="surname" onChange={handleChange} />
              </Col>

              <h4>Datos del Restaurant</h4>
              <Col sm="12" className="mb-3">
                <Form.Label>Razón Social</Form.Label>
                <Form.Control type="text" name="restaurantName" onChange={handleChange} />
              </Col>

              <Col sm="12" className="mb-3">
                <Form.Label>RUC</Form.Label>
                <Form.Control type="text" name="ruc" onChange={handleChange} />
              </Col>
              <Col sm="12" className="mb-3">
                <Form.Label>Teléfono del local</Form.Label>
                <Form.Control type="text" name="phoneNumber" onChange={handleChange} />
              </Col>
              <Col sm="12" className="mb-3">
                <Form.Label>Correo del local</Form.Label>
                <Form.Control type="text" name="email" onChange={handleChange} />
              </Col>
              <Col sm="6" className="mb-3">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" name="city" onChange={handleChange} />
              </Col>
              <Col sm="6" className="mb-3">
                <Form.Label>Distrito</Form.Label>
                <Form.Control type="text" name="district" onChange={handleChange} />
              </Col>

              <Col sm="12" className="mb-3">
                <Form.Label>Dirección del local</Form.Label>
                <Form.Control type="text" name="address" onChange={handleChange} />
              </Col>

            </Form.Group>

          </Col>
          <Col lg={6}>
            <Form.Group as={Row} className="mb-3">
              <Col sm="12" className="mb-3">
                <Form.Group>
                  <Form.Label>Imagen representativa del restaurant</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>

              <Col sm="12" className="mb-3">
                <Form.Group>
                  <Form.Label>Logo del restaurant</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>

              <h3>Horario de Atención</h3>
              <Col sm="6" className="mb-3">
                <Form.Label>Desde</Form.Label>
                <Form.Select aria-label="Default select example">
                  {['9:00', '10:00', '11:00', '24:00'].map((hora) => <option>{hora}</option>)}
                </Form.Select>
              </Col>
              <Col sm="6" className="mb-3">
                <Form.Label>Hasta</Form.Label>
                <Form.Select aria-label="Default select example">
                  {['9:00', '10:00', '11:00', '24:00'].map((hora) => <option>{hora}</option>)}
                </Form.Select>
              </Col>

              <h3>Datos del delivery</h3>
              <h5>Tiempo de entrega</h5>
              <Col sm="6" className="mb-3">
                <Form.Label>Desde</Form.Label>
                <Form.Select aria-label="Default select example">
                  {['30', '45', '60', '75'].map((hora) => (
                    <option>
                      {hora}
                      {' '}
                      min
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col sm="6" className="mb-3">
                <Form.Label>Hasta</Form.Label>
                <Form.Select aria-label="Default select example">
                  {['45', '60', '75', '90'].map((hora) => (
                    <option>
                      {hora}
                      {' '}
                      min
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <h5>Costo del delivery</h5>
              <Col sm="6" className="mb-3">
                <Form.Select aria-label="Default select example">
                  {['3.00', '3.50', '4.00', '4.50', '5.00', '5.50', '6.00'].map((precio) => (
                    <option>
                      S/
                      {' '}
                      {precio}

                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Row>
                <Col sm="12" className="mb-3">
                  <Form.Label className="mb-2">Contraseña</Form.Label>
                  <Form.Control type="password" name="password" onChange={handleChange} />
                </Col>

                <Col sm="12" className="mb-3">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control type="password" name="password_confirmation" onChange={handleChange} />
                </Col>

              </Row>

            </Form.Group>

          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit" className="Reg-button" onClick={handleShow}>
              Registrar
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Gracias por registrarte!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Revisa tu correo, para confirmar tu registro!</Modal.Body>
      </Modal>
    </Form>
  );
}

export default FormRestaurant;

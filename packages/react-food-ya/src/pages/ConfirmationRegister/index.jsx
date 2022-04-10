import React from 'react';
import './style.scss';
import { Container, Row, Col, Form } from 'react-bootstrap/';

function ConfirmationRegister() {
  return (
    <div className="confirmation-register">
      <section className="sectionWin">
        <Container fluid>
          <Row>
            <Col md={8} className="colWin">
              <div className="divText">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col md={4} className="bgCol">
              <div className="boxWhite">
                <h4>Consejo</h4>
                <strong>
                  ¿Por qué te pedimos el número de registro y dirección de facturación?
                </strong>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam laborum commodi
                  voluptates nesciunt suscipit ipsum totam quo at ab culpa!
                </p>
                <strong>
                  ¿Por qué te pedimos el número de registro y dirección de facturación?
                </strong>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia id eveniet,
                  consectetur impedit nemo quia atque voluptas
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ConfirmationRegister;

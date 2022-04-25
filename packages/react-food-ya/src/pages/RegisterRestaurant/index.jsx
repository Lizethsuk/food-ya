/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import './style.scss';
import { Container, Row, Col, Accordion } from 'react-bootstrap/';
import { GiArchiveRegister, GiOpenFolder } from 'react-icons/gi';
import { FaLaughWink } from 'react-icons/fa';
import CustomButton from '../../components/CustomButton';
import FormRestaurant from '../../components/FormRestaurant';
import { ThemeContext } from '../../context/themeContext';

function RegisterRestaurant() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="register-restaurant">
      <section className="bannerRegisterRestaurant">
        <Container>
          <Row>
            <Col xl={4}>
              <div className="bannerCol">
                <div className="bannerDiv">
                  <h2>Registra tu negocio!</h2>
                  <p>
                    Regístrate en simples pasos y empieza <br />a hacer crecer tu negocio junto a{' '}
                    <br />
                    nosotros.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={8}>
              <FormRestaurant />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionStep">
        <Container>
          <Row>
            <Col>
              <h2>Pasos para comenzar</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <GiArchiveRegister />
              <p>
                Primero, completa un sencillo <br />
                formulario.
              </p>
            </Col>
            <Col md={4}>
              <GiOpenFolder />
              <p>Luego, necesitamos que agregues algunos datos y documentación de tu local.</p>
            </Col>
            <Col md={4}>
              <FaLaughWink />
              <p>
                Una vez que lo completes, ¡ya estarás listo para que empecemos a trabajar juntos!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionWin">
        <Container fluid>
          <Row>
            <Col md={4} className="bgCol" />
            <Col md={8} className="colWin">
              <div className="divText">
                <ul>
                  <li>Van a aumentar tus ventas.</li>
                  <li>Va a mejorar la visibilidad de tu local.</li>
                  <li>Vas a optimizar tu sistema de entrega a domicilio.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionWork">
        <Container>
          <Row>
            <Col>
              <h2>Te llega el pedido, preparas y entregas</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <h1>1</h1>
              <p>
                El cliente realiza un pedido a tu <br />
                local desde PedidosYa.
              </p>
            </Col>
            <Col lg={3} md={6}>
              <h1>2</h1>
              <p>
                Recibes el pedido y comienzas <br />a preparlo lo antes posible.
              </p>
            </Col>
            <Col lg={3} md={6}>
              <h1>3</h1>
              <p>
                El repartidor retira el pedido en <br />
                tu local y lo lleva al cliente.
              </p>
            </Col>
            <Col lg={3} md={6}>
              <h1>4</h1>
              <p>El cliente recibe el pedido.</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <CustomButton
                buttonStyle="fit-content-button "
                content="Quiero registrarme"
                url="/restaurant"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`sectionMore ${theme}`}>
        <Container>
          <Row>
            <Col>
              <h3>Conoce más</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>¿Cómo recibo los pedidos?</Accordion.Header>
                  <Accordion.Body>
                    Hay tres maneras de recibir pedidos, con tres sistemas de recepción distintos.
                    Vía Desktop, es decir, con un aplicativo que el equipo de Bienvenida instala
                    fácilmente en la computadora de tu local. Vía POS, que es un sistema de
                    recepción independiente, parecido al de Visa, en el que se imprimirá un ticket
                    correspondiente a cada pedido. Y si usas un sistema de facturación, podemos
                    integrarnos para que recibas el pedido y facturarlo dentro de tu sistema.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>¿Cómo es el proceso cuando entra un pedido?</Accordion.Header>
                  <Accordion.Body>
                    Los pedidos ingresan a tu sistema y a partir de que confirmas la recepción,
                    tienes alrededor de 15 minutos para prepararlo. Si el pago es online, el cadete
                    simplemente se lo llevará. Si el pago es en efectivo, el cadete te pagará cuando
                    lo retire. lo retire. Luego al entregarlo le cobrará al usuario el importe.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>¿Tiene algún costo estar en la plataforma?</Accordion.Header>
                  <Accordion.Body>
                    Por estar en la plataforma no se te cobra nada. PedidosYa cobra una comisión
                    únicamente cuando se logra una venta. Por lo tanto, ¡solo pagas cuando vendes!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>¿Cómo gestiono mi local?</Accordion.Header>
                  <Accordion.Body>
                    Para gestionar tu catálogo de productos, tus horarios de atención online y ver
                    cómo se desempeña tu negocio, dispones de Partner Portal. Esta herramienta es
                    segura, fácil de usar y te permitirá controlar tu local con independencia.
                    Además, te ofrecemos soporte las 24 horas en el chat de Ayuda en Línea.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default RegisterRestaurant;

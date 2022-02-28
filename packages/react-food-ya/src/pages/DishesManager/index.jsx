import React from 'react';
import {
  Container,
  Row, Col,
} from 'react-bootstrap';
import { VscVerified, VscHistory, VscStarFull } from 'react-icons/vsc';
import './style.scss';
import { MenuManageProvider } from '../../context/menuManageContext';
import ShowDishes from './ShowDishes';

function DishesManager() {
  const restaurantDescription = {
    name: 'Las Canastitas',
    type: 'Polleria',
    schedule: '16:30 p. m. - 22:30 p. m.',
    points: 4.5,
    img: 'https://w7.pngwing.com/pngs/954/418/png-transparent-fried-chicken-chicken-as-food-drawing-buffalo-wing-chicken-food-animals-logo.png',
  };

  return (
    <Container fluid className="restaurant-section">
      <MenuManageProvider>
        <Row>
          <Col lg={3}>
            <div className="infoRestaurant">
              <h1>{restaurantDescription.name}</h1>
              <img src={restaurantDescription.img} alt="" />
              <ul className="ulDescription">
                <li>
                  <VscVerified />
                  {restaurantDescription.type}
                </li>
                <li>
                  <VscHistory />
                  {restaurantDescription.schedule}
                </li>
                <li>
                  <VscStarFull />
                  {restaurantDescription.points}
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={9}>
            <div className="divMenu">
              <h4>
                Menú de
                {' '}
                {restaurantDescription.name}
              </h4>
              <Container fluid>
                <Row>
                  <ShowDishes />
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </MenuManageProvider>
    </Container>

  );
}

export default DishesManager;

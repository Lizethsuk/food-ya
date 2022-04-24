import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import { VscVerified, VscHistory, VscStarFull } from 'react-icons/vsc';
import './style.scss';
import { motion } from 'framer-motion';
import ShowDishes from './ShowDishes';
import { MenuManageContext } from '../../context/menuManageContext';

function DishesManager() {
  const { InitMenu, ClearMenu } = useContext(MenuManageContext);

  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { restaurantId } = useParams();

  const FetchEverything = async (menu) => {
    setRestaurant(menu);
    await InitMenu(menu.dishes, restaurantId);
    setIsLoading(false);
  };

  const getRestaurant = () => {
    const url = `http://localhost:3001/api/restaurant/${restaurantId}`;
    fetch(url)
      .then((response) => response.json())
      .then((menu) => (FetchEverything(menu)))
      .catch((error) => error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getRestaurant();
    return (() => {
      ClearMenu();
    });
  }, []);

  return (
    <Container fluid className="restaurant-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {
          isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )
        }
        {
          !isLoading && (
            <Row>
              <Col lg={3}>
                <div className="infoRestaurant">
                  <h1>{restaurant.name}</h1>
                  <img src={restaurant.innerImg} alt="" />
                  <ul className="ulDescription">
                    <li>
                      <VscVerified />
                      <span>
                        {restaurant.type}
                      </span>
                    </li>
                    <li>
                      <VscHistory />
                      <span>
                        {restaurant.schedule}
                      </span>
                    </li>
                    <li>
                      <VscStarFull />
                      <span>
                        {restaurant.points}
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={9}>
                <div className="divMenu">
                  <h4>
                    Menú de
                    {' '}
                    {restaurant.name}
                  </h4>
                  <Container fluid>
                    <ShowDishes />
                  </Container>
                </div>
              </Col>
            </Row>
          )
        }
      </motion.div>
    </Container>

  );
}

export default DishesManager;

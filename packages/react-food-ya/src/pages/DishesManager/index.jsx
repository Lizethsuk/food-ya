import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { VscVerified, VscHistory, VscStarFull } from 'react-icons/vsc';
import './style.scss';
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
    console.log(menu);
  };

  const getRestaurant = () => {
    const url = `http://localhost:3001/api/menus/${restaurantId}`;
    fetch(url)
      .then((response) => response.json())
      .then((menu) => (FetchEverything(menu)))
      .catch((error) => console.log(error));
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
      {
        isLoading && <p>Is Loading</p>
      }
      {
        !isLoading && (
          <Row>
            <Col lg={3}>
              <div className="infoRestaurant">
                <h1>{restaurant.name}</h1>
                <img src={restaurant.inner_img} alt="" />
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
    </Container>

  );
}

export default DishesManager;

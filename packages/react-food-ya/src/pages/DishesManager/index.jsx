import React, { useState, useContext, useEffect } from 'react';
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
  const { menu, InitMenu } = useContext(MenuManageContext);

  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const FetchEverything = async (info) => {
    setRestaurant(info[0]);
    await InitMenu(info[0].dishes);
    setIsLoading(false);
  };

  const getRestaurant = () => {
    const url = 'http://localhost:3000/restaurant_dish.json';
    fetch(url)
      .then((response) => response.json())
      .then((restaurants) => (FetchEverything(restaurants)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (menu.length === 0) {
      // InitMenu([
      //   {
      //     id: 0, name: '1 Pollo', price: 54, description: 'pollo, papas y ensalada', stars: 5, img: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
      //   },
      //   {
      //     id: 1, name: '1/2 Pollo', price: 28, description: 'pollo, papas y ensalada', stars: 5, img: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
      //   },
      //   {
      //     id: 2, name: '1/4 Pollo', price: 16, description: 'pollo, papas y ensalada', stars: 5, img: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
      //   }]);
      getRestaurant();
    }
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
                <img src={restaurant.img} alt="" />
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

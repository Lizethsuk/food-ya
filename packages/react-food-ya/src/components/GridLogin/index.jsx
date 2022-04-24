import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap/';
import GridCard from '../GridCard';
import './style.scss';

function GridLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const FetchEverything = async (info) => {
    setRestaurants(info);
    setIsLoading(false);
  };

  const getRestaurants = () => {
    const url = 'http://localhost:3001/api/restaurant';
    fetch(url)
      .then((response) => response.json())
      .then((restaurantsFetched) => FetchEverything(restaurantsFetched))
      .catch((error) => error(error));
  };

  useEffect(() => {
    if (restaurants.length === 0) {
      getRestaurants();
    }
    setIsLoading(true);
  }, []);

  return (
    <div className="grid-section">
      <Container>
        <Row>
          <Col>
            <h2>Los mas populares</h2>
          </Col>
        </Row>
        <Row className="divUlType">
          {!isLoading &&
            restaurants.map((restaurant) => (
              <GridCard
                key={restaurant.id}
                img={restaurant.card_img}
                name={restaurant.restaurantName}
                stars={restaurant.points}
                scheduleOpen={restaurant.scheduleOpen}
                scheduleClose={restaurant.scheduleClose}
                isLogin
                id={restaurant.id}
              />
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default GridLogin;

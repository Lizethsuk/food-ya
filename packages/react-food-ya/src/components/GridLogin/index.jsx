import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
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
      .then((restaurantsFetched) => (FetchEverything(restaurantsFetched)))
      .catch((error) => error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    if (restaurants.length === 0) {
      getRestaurants();
    }
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
          {
            !isLoading && restaurants.map((restaurant) => (
              // eslint-disable-next-line max-len
              <GridCard
                img={restaurant.card_img}
                name={restaurant.restaurantName}
                stars={restaurant.points}
                scheduleOpen={restaurant.scheduleOpen}
                scheduleClose={restaurant.scheduleClose}
                key={restaurant.id}
                isLogin
                id={restaurant.id}
              />
            ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default GridLogin;

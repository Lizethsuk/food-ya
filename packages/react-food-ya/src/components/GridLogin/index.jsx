import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap/';
import { AiOutlineSearch } from 'react-icons/ai';
import GridCard from '../GridCard';
import './style.scss';
import FormCustome from '../../pages/Home/style';
import CONFIG from '../../utils/host';

function GridLogin({ handleChange, searchRestaurant, query }) {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const FetchEverything = async (info) => {
    setRestaurants(info);
    setIsLoading(false);
  };

  const getRestaurants = () => {
    const url = `${CONFIG.url}/api/restaurant${query !== '' ? `?search=${query}` : ''}`;
    console.log('URL: ', url);
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

  useEffect(() => {
    getRestaurants();
  }, [query]);

  return (
    <>
      <FormCustome>
        <div className="divIcon">
          <AiOutlineSearch />
        </div>
        <input
          className="searchInp"
          onChange={handleChange}
          name="dishName"
          placeholder="Que deseas comer hoy?"
          type="text"
        />

        <input
          className="buttonInp"
          onClick={searchRestaurant}
          type="submit"
          value="Busca ya!"
          placeholder="Busca ya!"
        />
      </FormCustome>
      <img
        src="https://live.pystatic.com/webassets/AppscoreWeb/monolith/4.0.42/images/monolith-people-users-search.6494c324.svg"
        alt="Busca un producto"
      />
      <h3 className="sc-xsbquu-1 fnsLFP">Busca en FoodYa</h3>
      <div className="sc-xsbquu-2 dsfBpo">Encuentra lo que buscas de la forma más rápida</div>

      <div className="grid-section">
        <Container>
          {!isLoading && restaurants.length > 0 && (
            <>
              <Row>
                <Col>
                  <h2>Los mas populares</h2>
                </Col>
              </Row>
              <Row className="divUlType">
                {restaurants.map((restaurant) => (
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
            </>
          )}
          <Row className="divUlType">
            {!isLoading && restaurants.length <= 0 && <h2>No hay resultados, busca otra cosa</h2>}
          </Row>
        </Container>
      </div>
    </>
  );
}

GridLogin.propTypes = {
  handleChange: PropTypes.func,
  searchRestaurant: PropTypes.func,
  query: PropTypes.string
};

GridLogin.defaultProps = {
  handleChange: null,
  searchRestaurant: null,
  query: ''
};

export default GridLogin;

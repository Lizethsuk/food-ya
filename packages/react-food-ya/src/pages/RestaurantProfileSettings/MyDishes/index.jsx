/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { GrAdd } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import CardMenuRestaurant from '../../../components/CardMenuRestaurant';
import CustomSimpleButton from '../../../components/CustomSimpleButton';

function MyDishes({ dishes }) {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <h1>Mis Platos</h1>
      {dishes.map((dish) => {
        return (
          <CardMenuRestaurant
            key={dish.id}
            name={dish.dishName}
            price={dish.price}
            description={dish.description}
            img={dish.image}
            size={12}
          />
        );
      })}

      <CustomSimpleButton
        disabled={false}
        callback={() => navigate(`/add-dish`)}
        buttonStyle="fit-content center content"
        content={
          <div>
            <GrAdd />
            <span>Añadir Plato</span>
          </div>
        }
      />
    </Container>
  );
}

MyDishes.propTypes = {
  dishes: PropTypes.array
};

MyDishes.defaultProps = {
  dishes: []
};

export default MyDishes;

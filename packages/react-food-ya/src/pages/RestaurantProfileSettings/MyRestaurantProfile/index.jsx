/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function MyRestaurantProfile({
  dishes,
  email,
  phoneNumber,
  name,
  surname,
  restaurantName,
  city,
  district,
  address
}) {
  return (
    <>
      <div>MyRestaurantProfile</div>
      {dishes.map((dish) => {
        return (
          <div key={dish.id}>
            <p>{dish.dishName}</p>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
            <p>{dish.value}</p>
          </div>
        );
      })}
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{`${name} ${surname}`}</p>
      <p>{restaurantName}</p>
      <p>{city}</p>
      <p>{district}</p>
      <p>{address}</p>
    </>
  );
}

MyRestaurantProfile.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  dishes: PropTypes.array,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  restaurantName: PropTypes.string,
  city: PropTypes.string,
  district: PropTypes.string,
  address: PropTypes.string
};

MyRestaurantProfile.defaultProps = {
  name: 'Default Name',
  surname: 'Default Surname',
  dishes: [],
  email: 'Default Email',
  phoneNumber: 'Default Phone Number',
  restaurantName: 'Default Restaurant Name',
  city: 'Default City',
  district: 'Default District',
  address: 'Default Address'
};

export default MyRestaurantProfile;

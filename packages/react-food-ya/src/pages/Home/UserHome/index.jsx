import React, { useState } from 'react';
import GridLogin from '../../../components/GridLogin';

function UserHome() {
  const [dish, setDish] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setDish(e.target.value);
  };
  const searchRestaurant = (e) => {
    e.preventDefault();
    setQuery(dish);
  };

  return (
    <GridLogin query={query} handleChange={handleChange} searchRestaurant={searchRestaurant} />
  );
}

export default UserHome;

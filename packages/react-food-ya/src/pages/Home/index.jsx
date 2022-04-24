import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import UserHome from './UserHome';
import RestaurantHome from './RestaurantHome';

function Home({ isClient }) {
  const [dish, setDish] = useState('');
  const handleChange = (e) => {
    setDish(e.target.value);
  };
  const searchRestaurant = (e) => {
    e.preventDefault();
    console.log(dish);
  };
  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        {isClient && <UserHome handleChange={handleChange} searchRestaurant={searchRestaurant} />}
        {!isClient && <RestaurantHome />}
      </motion.div>
    </div>
  );
}

Home.propTypes = {
  isClient: PropTypes.bool
};

Home.defaultProps = {
  isClient: false
};

export default Home;

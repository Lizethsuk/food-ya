import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import UserHome from './UserHome';
import RestaurantHome from './RestaurantHome';

function Home({ isClient }) {
  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        {isClient && <UserHome />}
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

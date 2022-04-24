import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import GridLogin from '../../components/GridLogin';
import FormCustome from './style';

function Home({ isUser }) {
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
        {isUser && (
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
            <GridLogin />
          </>
        )}
        {!isUser && <p>Is Owner</p>}
      </motion.div>
    </div>
  );
}

Home.propTypes = {
  isUser: PropTypes.bool
};

Home.defaultProps = {
  isUser: false
};

export default Home;

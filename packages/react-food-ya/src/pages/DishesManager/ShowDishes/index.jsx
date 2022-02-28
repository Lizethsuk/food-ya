/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect } from 'react';
import { MenuManageContext } from '../../../context/menuManageContext';
// import Dish from '../../../components/Dish';
import './style.scss';
import CardMenu from '../../../components/CardMenu';

function ShowDishes() {
  const { isLoading, menu, InitMenu } = useContext(MenuManageContext);
  useEffect(() => {
    InitMenu([
      {
        id: 0, name: '1 Pollo', price: 54, description: 'pollo, papas y ensalada', stars: 5, img: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
      },
      {
        id: 1, name: '1/2 Pollo', price: 28, description: 'pollo, papas y ensalada', stars: 5, img: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
      },
      {
        id: 2, name: '1/4 Pollo', price: 16, description: 'pollo, papas y ensalada', stars: 5, img: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
      }]);
  }, []);

  return (
    <div className="card-container">
      {
        // !isLoading && Object.entries(menu).map((dish, index) => (<Dish key={index} item={dish} />))
        !isLoading && menu.map((dish) => (
          <CardMenu
            key={dish.id}
            stars={dish.stars}
            img={dish.img}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            value={dish.value}
          />
        ))
      }
    </div>
  );
}
export default ShowDishes;

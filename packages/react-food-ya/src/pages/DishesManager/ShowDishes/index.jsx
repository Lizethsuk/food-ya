/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect } from 'react';
import { MenuManageContext } from '../../../context/menuManageContext';
import Dish from '../../../components/Dish';
import './style.scss';

function ShowDishes() {
  const { isLoading, menu, InitMenu } = useContext(MenuManageContext);
  useEffect(() => {
    InitMenu([
      { name: 'Pan Con Pollo', img: 'https://www.ecommunity.com/sites/default/files/styles/blog_post_desktop/public/blog-posts/2017-07/heart-healthy-foods.jpg?itok=FtE9Z03T' },
      { name: 'Pollo a la brasa', img: 'https://www.ecommunity.com/sites/default/files/styles/blog_post_desktop/public/blog-posts/2017-07/heart-healthy-foods.jpg?itok=FtE9Z03T' },
      { name: 'Choripan', img: 'https://www.ecommunity.com/sites/default/files/styles/blog_post_desktop/public/blog-posts/2017-07/heart-healthy-foods.jpg?itok=FtE9Z03T' }]);
  }, []);

  return (
    <div className="card-container">
      {
        // !isLoading && Object.entries(menu).map((dish, index) => (<Dish key={index} item={dish} />))
        !isLoading && menu.map((dish, index) => (<Dish key={index} item={dish} />))
      }
    </div>
  );
}
export default ShowDishes;

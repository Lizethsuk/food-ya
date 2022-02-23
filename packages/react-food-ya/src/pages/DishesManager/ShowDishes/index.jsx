/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect } from 'react';
import { MenuManageContext } from '../../../context/menuManageContext';
import Dish from '../../../components/Dish';

function ShowDishes() {
  const { isLoading, menu, InitMenu } = useContext(MenuManageContext);
  useEffect(() => {
    InitMenu(['Pan Con Pollo', 'Pollo a la brasa', 'Choripan']);
  }, []);

  return (
    <section>
      {
        !isLoading && Object.entries(menu).map((dish, index) => (<Dish key={index} item={dish} />))
        // !isLoading || console.log(menu)
      }
    </section>
  );
}
export default ShowDishes;

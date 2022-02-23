/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { MenuManageContext } from '../../context/menuManageContext';

function Dish({ item }) {
  const { AddToMenu, RemoveFromMenu } = useContext(MenuManageContext);

  return (
    <div style={{
      width: '20%', backgroundColor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column',
    }}
    >
      <p>{item[0]}</p>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <button type="button" onClick={() => AddToMenu(item[0])}>+</button>
        <p>{item[1]}</p>
        <button type="button" onClick={() => RemoveFromMenu(item[0])}>-</button>
      </div>
    </div>
  );
}

export default Dish;

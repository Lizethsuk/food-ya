/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
// import { ThemeContext } from '../../../context/themeContext';

function MyRestaurantOrders({ orders }) {
  console.log('ORDERS: ', orders);
  //   const { theme } = useContext(ThemeContext);
  //   const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);

  const getOrders = async () => {
    const response = await fetch('http://localhost:3001/api/order/restaurant', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const responsejson = await response.json();
    setOrderList(responsejson);
    console.log(responsejson);
  };

  //   const RedirectTo = (orderNumber) => {
  //     navigate(`/profile/orders/${orderNumber}`);
  //   };

  useEffect(() => {
    setIsLoading(true);
    getOrders();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [orderList]);

  return (
    <>
      <div>MyRestaurantOrders</div>
      {!isLoading &&
        orders.map(() => {
          return (
            //   <div key={order.id}>
            //     {/* <p>{order.dishName}</p>
            //     <p>{order.description}</p>
            //     <p>{order.price}</p>
            //     <p>{order.value}</p> */}
            //     <p>{order.id}</p>
            //   </div>
            <p>AAA</p>
          );
        })}
    </>
  );
}

MyRestaurantOrders.propTypes = {
  orders: PropTypes.array
};

MyRestaurantOrders.defaultProps = {
  orders: []
};

export default MyRestaurantOrders;

/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../context/themeContext';
import OrderCard from '../../ProfileSettings/Orders/OrderCard';
import { ParseDate } from '../../../utils/parseDate';
import CONFIG from '../../../utils/host';

function MyRestaurantOrders({ orders }) {
  console.log('ORDERS: ', orders);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);

  const getOrders = async () => {
    const response = await fetch(`${CONFIG.url}/api/order/restaurant`, {
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

  const RedirectTo = (orderNumber) => {
    navigate(`/restaurant-profile/order/${orderNumber}`);
  };

  useEffect(() => {
    setIsLoading(true);
    getOrders();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [orderList]);

  return (
    <>
      <h1>Mis Órdenes</h1>
      {!isLoading &&
        orderList.order?.map((order) => {
          return (
            <OrderCard
              key={order._id}
              restaurantName={order.clientID?.email}
              email={`${order.clientID?.name} ${order.clientID?.surname}`}
              orderId={order._id}
              orderNumber={order.orderNumber}
              buyDate={ParseDate(order.day, order.month, order.year)}
              deliveryType={order.deliveryType}
              documentType={order.documentType}
              totalPayment={order.totalPayment}
              theme={theme}
              callback={RedirectTo}
            />
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

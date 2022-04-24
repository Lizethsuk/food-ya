/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ButtonGroup, ToggleButton } from 'react-bootstrap/';
import { ProfileButtonOptions } from './style';
import MyRestaurantOrders from './MyRestaurantOrders';
import MyRestaurantProfile from './MyRestaurantProfile';

function RestaurantSettingsProfile() {
  const [restaurantOwnerInfo, setRestaurantOwnerInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [radioValue, setRadioValue] = useState('1');
  const navigate = useNavigate();
  const location = useLocation();

  const options = [
    { name: 'Mi perfil', value: '1' },
    { name: 'Mis órdenes', value: '2' }
  ];

  const fetchOwnerInfo = async () => {
    const response = await fetch('http://localhost:3001/api/restaurant/owner', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const responsejson = await response.json();
    setRestaurantOwnerInfo(responsejson);
  };

  useEffect(() => {
    setIsLoading(true);
    switch (location.pathname) {
      case '/restaurant-profile/orders':
        setRadioValue('2');
        break;
      case '/restaurant-profile/profile':
      default:
        setRadioValue('1');
        break;
    }

    fetchOwnerInfo();
    setIsLoading(false);
  }, []);

  const Redirect = (e) => {
    const { value } = e.currentTarget;
    setRadioValue(value);

    const tempLocation = '/restaurant-profile';

    switch (value) {
      case '2':
        navigate(`${tempLocation}/orders`);
        break;
      case '1':
      default:
        navigate(`${tempLocation}/profile`);
        break;
    }
  };

  return (
    <>
      <ProfileButtonOptions>
        <ButtonGroup>
          {isLoading && <p>Is Loading..</p>}
          {!isLoading &&
            options.map((radio, index) => (
              <ToggleButton
                key={index}
                id={`radio-${index}`}
                type="radio"
                name="radio"
                className={`btn-option 
                        ${(index + 1).toString() === radioValue ? 'selected' : ''}`}
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => Redirect(e)}>
                {radio.name}
              </ToggleButton>
            ))}
        </ButtonGroup>
      </ProfileButtonOptions>

      <p>{restaurantOwnerInfo.name}</p>

      <Routes>
        <Route
          path="/profile"
          element={
            <MyRestaurantProfile
            //   dishes={restaurantOwnerInfo.DishesID}
            //   email={restaurantOwnerInfo.email}
            //   phoneNumber={restaurantOwnerInfo.phoneNumber}
            //   name={restaurantOwnerInfo.name}
            //   surname={restaurantOwnerInfo.surname}
            //   restaurantName={restaurantOwnerInfo.restaurantName}
            //   city={restaurantOwnerInfo.city}
            //   district={restaurantOwnerInfo.district}
            //   address={restaurantOwnerInfo.address}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <MyRestaurantOrders
            // orders={restaurantOwnerInfo.OrdersID}
            />
          }
        />
      </Routes>
    </>
  );
}

export default RestaurantSettingsProfile;

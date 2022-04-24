import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function RestaurantHome() {
  const [restaurantOwnerInfo, setRestaurantOwnerInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    console.log(responsejson);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchOwnerInfo();
    setIsLoading(false);
  }, []);

  return (
    <>
      {!isLoading && (
        <Container fluid>
          <Image src={restaurantOwnerInfo.card_img} fluid className="restaurant-image" />
          <h2>Bienvenido {`${restaurantOwnerInfo.name} ${restaurantOwnerInfo.surname}`}</h2>
          <h3>{restaurantOwnerInfo.restaurantName}</h3>
        </Container>
      )}
      {isLoading && <p>Is Loading...</p>}
    </>
  );
}

export default RestaurantHome;

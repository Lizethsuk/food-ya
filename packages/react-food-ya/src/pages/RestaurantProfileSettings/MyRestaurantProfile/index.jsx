/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import UpdateFormRestaurant from './UpdateFormRestaurant';
import CONFIG from '../../../utils/host';

function MyRestaurantProfile() {
  const [restaurantOwnerInfo, setRestaurantOwnerInfo] = useState({
    email: '',
    city: '',
    address: '',
    district: '',
    ruc: '',
    name: '',
    surname: '',
    restaurantName: '',
    phoneNumber: '',
    date: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchOwnerInfo = async () => {
    const response = await fetch(`${CONFIG.url}/api/restaurant/owner`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const responsejson = await response.json();
    const responseModified = {
      email: responsejson.email,
      city: responsejson.city,
      address: responsejson.address,
      district: responsejson.district,
      ruc: responsejson.ruc,
      name: responsejson.name,
      surname: responsejson.surname,
      restaurantName: responsejson.restaurantName,
      phoneNumber: responsejson.phoneNumber,
      date: responsejson.date
    };
    setRestaurantOwnerInfo(responseModified);
    console.log('RESPONSE JSON: ', responseModified);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchOwnerInfo();
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Mi Perfil</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {!isLoading && (
            <UpdateFormRestaurant passMethod="PATCH" defaultValues={restaurantOwnerInfo} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default MyRestaurantProfile;

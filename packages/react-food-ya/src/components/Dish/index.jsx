/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { MenuManageContext } from '../../context/menuManageContext';

function Dish({ item }) {
  const { AddToMenu, RemoveFromMenu } = useContext(MenuManageContext);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Button variant="primary" onClick={() => AddToMenu(item.name)}>
            +
          </Button>
          <Card.Text style={{ height: '100%', marginBottom: '0px' }}>{item.value}</Card.Text>
          <Button variant="primary" onClick={() => RemoveFromMenu(item.name)}>
            -
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Dish;

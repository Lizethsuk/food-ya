import React from 'react';
import {
  Container,
  // Row, Col, Form,
} from 'react-bootstrap';
import './style.scss';
import { MenuManageProvider } from '../../context/menuManageContext';
import ShowDishes from './ShowDishes';

function DishesManager() {
  return (
    <MenuManageProvider>
      <div className="page-container">
        <Container fluid>
          <ShowDishes />
        </Container>
      </div>
    </MenuManageProvider>
  );
}

export default DishesManager;

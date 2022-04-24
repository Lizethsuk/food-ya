import React from 'react';
import { Container } from 'react-bootstrap';
import FormUbication from '../FormUbication';
import './style.scss';

function Banner() {
  return (
    <Container className="banner">
      <div className="banner-img" />
      <div className="banner-text">
        <h1 className="mb-3">
          Empiece a ordenar en <br /> Food Ya!
        </h1>
        <FormUbication />
      </div>
    </Container>
  );
}

export default Banner;

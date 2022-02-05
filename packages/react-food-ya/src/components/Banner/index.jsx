import React from 'react';
import { Carousel } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import './style.scss';

function Banner() {
  const bannerData = [
    {
      id: 0,
      img: 'https://iili.io/7XpyPf.md.png',
      title: 'Platillos especiales',
      description: 'Aquí algunos de nuestros mejores platillos especiales',
      buttonContent: '¡Vamos!',
    },
    {
      id: 1,
      img: 'https://iili.io/7XpyPf.md.png',
      title: 'Postres',
      description: 'Ven por unos postres',
      buttonContent: '¡Aquí!',
    },
    {
      id: 2,
      img: 'https://iili.io/7XpyPf.md.png',
      title: 'Pollo a la brasa',
      description: 'Disfruta de los mejores pollos a la brasa',
      buttonContent: '¡Vamos!',
    },
  ];

  return (
    <div className="banner">
      <Carousel className="w-100 h-100 banner-carousel-container">
        {bannerData.map((value) => (
          <Carousel.Item key={value.id}>
            <img
              className="d-block w-100 h-100 banner-img"
              src={value.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-title">{value.title}</h3>
              <p className="carousel-description">{value.description}</p>
              <CustomButton
                content={value.buttonContent}
                url="/register-selection"
              />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;

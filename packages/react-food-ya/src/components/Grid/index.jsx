import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import GridCard from '../GridCard';
import './style.scss';

function Grid() {
  const restaurants = [
    {
      id: 0,
      name: 'Las Canastitas',
      type: 'Polleria',
      stars: 5,
      img: {
        url: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
      },
      link: '#',
    },
    {
      id: 1,
      name: 'Doña Lucha',
      type: 'Anticucheria',

      stars: 4,
      img: {
        url: 'https://i.ibb.co/8M51bnY/img-2.jpg',
      },
      link: '#',
    },
    {
      id: 2,
      name: 'When Wha',
      type: 'Chifa ',
      stars: 4,
      img: {
        url: 'https://i.ibb.co/f0qGzMs/img-3.jpg',
      },
      link: '#',
    },
    {
      id: 3,
      name: 'Diego',
      type: 'Caldo de gallina y sopas',
      stars: 5,
      img: {
        url: 'https://i.ibb.co/KFbmT5F/img-4.jpg',
      },
      link: '#',
    },
    {
      id: 4,
      name: 'La buena pizza',
      type: 'Pizzas',
      stars: 4,
      img: {
        url: 'https://i.ibb.co/PG2ykFV/img-5.jpg',
      },
      link: '#',
    },
    {
      id: 5,
      name: 'Bravazo',
      type: 'Hamburguesas / salchipapas ',

      stars: 4,
      img: {
        url: 'https://i.ibb.co/1nD31w4/img-6.jpg',
      },
      link: '#',
    },
  ];

  return (
    <div className="grid-section">
      <Container>
        <Row>
          <Col>
            <h2>Los mas populares</h2>
          </Col>
        </Row>
        <Row className="divUlType">
          { restaurants.map((restaurant) => (
            // eslint-disable-next-line max-len
            <GridCard img={restaurant.img} name={restaurant.name} type={restaurant.type} stars={restaurant.stars} key={restaurant.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Grid;

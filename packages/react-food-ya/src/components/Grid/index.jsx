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
      points: 5,
      img: 'https://i.ibb.co/yhbYvNG/img-1.jpg'
    },
    {
      id: 1,
      name: 'Doña Lucha',
      type: 'Anticucheria',
      points: 4,
      img: 'https://i.ibb.co/8M51bnY/img-2.jpg'
    },
    {
      id: 2,
      name: 'When Wha',
      type: 'Chifa ',
      points: 4,
      img: 'https://i.ibb.co/f0qGzMs/img-3.jpg'
    },
    {
      id: 3,
      name: 'Diego',
      type: 'Caldo de gallina y sopas',
      points: 5,
      img: 'https://i.ibb.co/KFbmT5F/img-4.jpg'
    },
    {
      id: 4,
      name: 'La buena pizza',
      type: 'Pizzas',
      points: 4,
      img: 'https://i.ibb.co/PG2ykFV/img-5.jpg'
    },
    {
      id: 5,
      name: 'Bravazo',
      type: 'Hamburguesas / salchipapas ',
      points: 4,
      img: 'https://i.ibb.co/1nD31w4/img-6.jpg'
    }
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
          {restaurants.map((restaurant) => (
            <GridCard
              img={restaurant.img}
              name={restaurant.name}
              // type={restaurant.type}
              stars={restaurant.points}
              key={restaurant.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Grid;

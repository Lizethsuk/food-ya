import React from 'react';
import GridCard from '../GridCard';

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

  const listRestaurants = restaurants.map((contact) => (
    <GridCard contact={contact} key={contact.id} />
  ));
  return (
    <div className="grid-section">
      <ul className="divUlType">{listRestaurants}</ul>
    </div>
  );
}

export default Grid;

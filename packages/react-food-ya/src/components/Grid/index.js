import { React, Component } from "react";
import GridCard from "../GridCard/";

function Grid(props) {
  const restaurants = [
    {
      name: "Las Canastitas",
      type: "Polleria",
      stars: 5,
      img: {
        url: "https://i.ibb.co/yhbYvNG/img-1.jpg",
      },
      link: "#",
    },
    {
      name: "Doña Lucha",
      type: "Anticucheria",

      stars: 4,
      img: {
        url: "https://i.ibb.co/8M51bnY/img-2.jpg",
      },
      link: "#",
    },
    {
      name: "When Wha",
      type: `Chifa `,
      stars: 4,
      img: {
        url: "https://i.ibb.co/f0qGzMs/img-3.jpg",
      },
      link: "#",
    },
    {
      name: "Diego",
      type: "Caldo de gallina y sopas",
      stars: 5,
      img: {
        url: "https://i.ibb.co/KFbmT5F/img-4.jpg",
      },
      link: "#",
    },
    {
      name: "La buena pizza",
      type: "Pizzas",
      stars: 4,
      img: {
        url: "https://i.ibb.co/PG2ykFV/img-5.jpg",
      },
      link: "#",
    },
    {
      name: "Bravazo",
      type: "Hamburguesas / salchipapas ",

      stars: 4,
      img: {
        url: "https://i.ibb.co/1nD31w4/img-6.jpg",
      },
      link: "#",
    },
  ];
  console.log(restaurants[0].name);
  const listRestaurants = restaurants.map((contact, index) => (
    <GridCard contact={contact} key={index} />
  ));
  return (
    <div className="grid-section">
      <ul className="divUlType">{listRestaurants}</ul>
    </div>
  );
}

export default Grid;

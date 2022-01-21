import { React } from "react";
import { VscVerified, VscHistory, VscStarFull } from "react-icons/vsc";
import CardMenu from "../CardMenu";

function Restaurant(props) {
  const restaurantDescription = {
    name: "Las Canastitas",
    type: "Polleria",
    schedule: "16:30 p. m. - 22:30 p. m.",
    points: 4.5,
    img: {
      url: "https://w7.pngwing.com/pngs/954/418/png-transparent-fried-chicken-chicken-as-food-drawing-buffalo-wing-chicken-food-animals-logo.png",
    },
    link: "#",
    menu: [
      {
        name: "1 Pollo",
        price: "s/54",
        description: "pollo, papas y ensalada",
        stars: 5,
        img: {
          url: "https://i.ibb.co/yhbYvNG/img-1.jpg",
        },
        link: "#",
      },
      {
        name: "1/2 Pollo",
        price: "s/28",

        stars: 4,
        description: "1/2 pollo, papas y ensalada",
        img: {
          url: "https://i.ibb.co/yhbYvNG/img-1.jpg",
        },
        link: "#",
      },
      {
        name: "1/4 Pollo",
        price: "s/16",
        stars: 4,
        description: "1/4 pollo, papas y ensalada",
        img: {
          url: "https://i.ibb.co/yhbYvNG/img-1.jpg",
        },
        link: "#",
      },
      {
        name: "1l de chicha",
        price: "s/15",
        description: "1l de chicha natural",
        stars: 5,
        img: {
          url: "https://wongfood.vteximg.com.br/arquivos/ids/268644-1000-1000/535911-1.jpg",
        },
        link: "#",
      },
      {
        name: "Ensalada",
        price: "s/12",
        description: "Ensalada de palta, lechuga, zanahoria y tomate",
        stars: 4,
        img: {
          url: "https://i.ibb.co/yhbYvNG/img-1.jpg",
        },
        link: "#",
      },
    ],
  };
  const menuRestaurant = restaurantDescription.menu;
  const listMenu = menuRestaurant.map((contact, index) => (
    <CardMenu contact={contact} key={index} />
  ));
  
  return (
    <div className="restaurant-section">
      <div className="infoRestaurant">
        <h1>{restaurantDescription.name}</h1>
        <img src={restaurantDescription.img.url} alt="" />
        <ul className="ulDescription">
          <li>
            <VscVerified />
            {restaurantDescription.type}
          </li>
          <li>
            <VscHistory />
            {restaurantDescription.schedule}
          </li>
          <li>
            <VscStarFull />
            {restaurantDescription.points}
          </li>
        </ul>
      </div>
      <div className="divMenu">
        <h4>Menú de {restaurantDescription.name}</h4>
        <ul className="divUlType">{listMenu}</ul>
      </div>
    </div>
  );
}

export default Restaurant;

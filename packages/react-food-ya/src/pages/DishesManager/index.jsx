import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Spinner,
  Offcanvas,
} from 'react-bootstrap';
import './style.scss';
import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';
import { MenuManageContext } from '../../context/menuManageContext';
import RestaurantInfo from './RestaurantInfo';
import { OrderCard, TotalContainer, OffCanvasTitle } from './style';
import CustomSimpleButton from '../../components/CustomSimpleButton';
import CustomButton from '../../components/CustomButton';

function DishesManager() {
  const {
    InitMenu, ClearMenu, countProducts, selectedMenu, GetTotal, SaveData,
  } = useContext(MenuManageContext);

  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { restaurantId } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const FetchEverything = async (menu) => {
    setRestaurant(menu);
    await InitMenu(menu.dishes, restaurantId);
    setIsLoading(false);
  };

  const getRestaurant = () => {
    const url = `http://localhost:3001/api/menus/${restaurantId}`;
    fetch(url)
      .then((response) => response.json())
      .then((menu) => (FetchEverything(menu)))
      .catch((error) => error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getRestaurant();
    return (() => {
      ClearMenu();
    });
  }, []);

  return (
    <Container fluid className="restaurant-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {
          isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )
        }
        {
          !isLoading && (
            <RestaurantInfo
              key={restaurant.id}
              name={restaurant.name}
              innerImg={restaurant.inner_img}
              type={restaurant.type}
              schedule={restaurant.schedule}
              points={restaurant.points}
            />
          )
        }
        <CustomSimpleButton
          disabled={countProducts <= 0}
          callback={handleShow}
          content={(
            <>
              <FiShoppingCart />
              Shop
            </>
          )}
        />
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <OffCanvasTitle>
                Pedidos
              </OffCanvasTitle>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {
              selectedMenu.map((item) => (
                <OrderCard key={item.id}>
                  <div className="div-img">
                    <img className="imgAvatar" src={item.img} alt="" />
                  </div>
                  <div className="mid-container">
                    x
                    {' '}
                    {item.value}
                  </div>
                  <div className="div-description">
                    <h2>{item.name}</h2>
                    <ul className="ulStars">
                      <li className="star">{' ★ '.repeat(item.points)}</li>
                    </ul>
                    <h3>
                      S/
                      {' '}
                      {item.price}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </OrderCard>
              ))
            }
            <TotalContainer>
              Total:
              {' '}
              S/
              {' '}
              {GetTotal()}
            </TotalContainer>
            <CustomButton content="Accept" buttonStyle="full-button" url="/payment" callback={SaveData} />
          </Offcanvas.Body>
        </Offcanvas>
      </motion.div>
    </Container>
  );
}

export default DishesManager;

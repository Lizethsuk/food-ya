import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import './style.scss';
import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';
import { MenuManageContext } from '../../context/menuManageContext';
import RestaurantInfo from './RestaurantInfo';
import CustomSimpleButton from '../../components/CustomSimpleButton';
import PaymentModal from './PaymentModal';
import { InvoiceContext } from '../../context/invoiceContext';
import CONFIG from '../../utils/host';

function DishesManager() {
  const { InitMenu, ClearMenu, countProducts, selectedMenu, GetTotal, SaveData } =
    useContext(MenuManageContext);
  const { saveRestaurant } = useContext(InvoiceContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { restaurantId } = useParams();

  const fetchEverything = async (menu) => {
    setRestaurant(menu);
    saveRestaurant(menu);
    await InitMenu(menu.dishes, restaurantId);
    setIsLoading(false);
  };

  const getRestaurant = () => {
    const url = `${CONFIG.url}/api/restaurant/${restaurantId}`;
    fetch(url)
      .then((response) => response.json())
      .then((menu) => fetchEverything(menu))
      .catch((error) => error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getRestaurant();
    return () => {
      ClearMenu();
    };
  }, []);

  return (
    <Container fluid className="restaurant-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!isLoading && (
          <RestaurantInfo
            key={restaurant.id}
            name={restaurant.name}
            innerImg={restaurant.inner_img}
            // type={restaurant.type}
            schedule={restaurant.schedule}
            points={restaurant.points}
          />
        )}
        <CustomSimpleButton
          disabled={countProducts <= 0}
          callback={handleShow}
          buttonStyle="fit-content center content"
          content={
            <div>
              <FiShoppingCart />
              <span>Pagar</span>
            </div>
          }
        />
        <PaymentModal
          show={show}
          handleClose={handleClose}
          selectedMenu={selectedMenu}
          GetTotal={GetTotal}
          SaveData={SaveData}
        />
      </motion.div>
    </Container>
  );
}

export default DishesManager;

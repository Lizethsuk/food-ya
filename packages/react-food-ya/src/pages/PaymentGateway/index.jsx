import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuManageContext } from '../../context/menuManageContext';
// import CustomSimpleButton from '../../components/CustomSimpleButton';
import { OrderCard, TotalContainer } from '../DishesManager/style';

function PaymentGateway() {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { GetProducts, selectedMenu, setSelectedMenu, GetTotal } = useContext(MenuManageContext);
  useEffect(() => {
    setIsLoading(true);
    setSelectedMenu(GetProducts());
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [selectedMenu]);

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <div>
            <h2>Page 2</h2>
            <button
              type="button"
              onClick={() => {
                setPage(0);
              }}>
              Page1
            </button>
            <button
              type="button"
              onClick={() => {
                setPage(2);
              }}>
              Page3
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Page 3</h2>
            <button
              type="button"
              onClick={() => {
                setPage(1);
              }}>
              Page2
            </button>
          </div>
        );
      case 0:
      default:
        return (
          <div>
            <h2>Page 1</h2>
            <button
              type="button"
              onClick={() => {
                setPage(1);
              }}>
              Page2
            </button>
          </div>
        );
    }
  };

  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <h2>Payment Gateway</h2>

        {renderPage()}
        {!isLoading &&
          selectedMenu.map((item) => (
            <OrderCard key={item.id}>
              <div className="div-img">
                <img className="imgAvatar" src={item.img} alt="" />
              </div>
              <div className="mid-container">x {item.value}</div>
              <div className="div-description">
                <h2>{item.name}</h2>
                <ul className="ulStars">
                  <li className="star">{' ★ '.repeat(item.points)}</li>
                </ul>
                <h3>S/ {item.price}</h3>
                <p>{item.description}</p>
              </div>
            </OrderCard>
          ))}
        {!isLoading && <TotalContainer>Total: S/ {GetTotal()}</TotalContainer>}
      </motion.div>
    </div>
  );
}
export default PaymentGateway;

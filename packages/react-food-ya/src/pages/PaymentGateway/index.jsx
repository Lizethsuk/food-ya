import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap/';
import { MenuManageContext } from '../../context/menuManageContext';
import CheckoutSteps from './CheckoutSteps';
import { GridSection } from '../../styles/style';
import { PaymentContainer } from './style';

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

  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <GridSection>
          <Container>
            <Row>
              <Col>
                <h2>Payment Gateway</h2>
              </Col>
            </Row>
            <Row>
              <Col>{`Step ${page + 1}`}</Col>
            </Row>
            <Row>
              <PaymentContainer>
                {!isLoading && (
                  <CheckoutSteps
                    page={page}
                    selectedMenu={selectedMenu}
                    GetTotal={GetTotal}
                    setPage={setPage}
                  />
                )}
              </PaymentContainer>
            </Row>
          </Container>
        </GridSection>
      </motion.div>
    </div>
  );
}
export default PaymentGateway;

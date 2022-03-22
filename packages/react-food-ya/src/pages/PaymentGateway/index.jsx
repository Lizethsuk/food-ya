import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap/';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { MenuManageContext } from '../../context/menuManageContext';
import CheckoutSteps from './CheckoutSteps';
import { GridSection } from '../../styles/style';
import { PaymentContainer, Stepper } from './style';

function PaymentGateway() {
  const maxPages = 3;
  const [page, setPage] = useState(0);
  const [steps, setSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    GetProducts,
    selectedMenu,
    setSelectedMenu,
    GetTotal,
    SetDeliveryPriceToTotal,
    RemoveFromOrder
  } = useContext(MenuManageContext);
  const progressInstance = <ProgressBar now={(page / (maxPages - 1)) * 100} />;

  const GenerateSteps = () => {
    const tempSteps = [];
    const tempIcons = [
      <FiShoppingCart />,
      <MdOutlineDeliveryDining />,
      <MdOutlineDeliveryDining />
    ];
    for (let i = 0; i < maxPages; i += 1) {
      tempSteps.push({ step: i + 1, icon: tempIcons[i] });
    }

    setSteps(tempSteps);
  };

  useEffect(() => {
    setIsLoading(true);
    setSelectedMenu(GetProducts());
    GenerateSteps();
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
                <Stepper>
                  {progressInstance}
                  <div className="step-container">
                    {steps.map((step, index) => {
                      return (
                        <div key={step.step} className={page === index ? 'step selected' : 'step'}>
                          {step.icon}
                        </div>
                      );
                    })}
                  </div>
                </Stepper>
              </Col>
            </Row>
            <Row>
              <PaymentContainer>
                {!isLoading && (
                  <CheckoutSteps
                    page={page}
                    selectedMenu={selectedMenu}
                    GetTotal={GetTotal}
                    setPage={setPage}
                    SetDeliveryPriceToTotal={SetDeliveryPriceToTotal}
                    RemoveFromOrder={RemoveFromOrder}
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

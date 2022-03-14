/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const PaymentContainer = styled.div`
  max-width: calc(45% - 20px);
  width: 100%;
  margin: 15px auto 20px auto;
`;

const Stepper = styled.div`
  max-width: calc(70% - 20px);
  width: 100%;
  margin: 40px auto;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .progress {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 7px;
  }
  .step-container {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    .step {
      background: #000000c5;
      color: white;
      padding: 10px;
      border-radius: 50%;
      height: 75px;
      width: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export { PaymentContainer, Stepper };

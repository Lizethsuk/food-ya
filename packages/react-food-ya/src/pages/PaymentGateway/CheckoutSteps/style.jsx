import styled from 'styled-components';
import {
  colorNavbar,
  colorCream,
  colorDark,
  colorDelivery,
  colorHoverDelivery
} from '../../../styles/variables.styled';

const EmptyShoppingCart = styled.div`
  width: 100%;
  height: 300px;
  margin: 15px auto 20px auto;
  .empty-shopping-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    svg {
      width: 50px;
      height: 50px;
    }
    .empty-shopping-content {
      font-weight: bold;
      font-size: 25px;
      margin: 0;
    }
    .empty-shopping-go-buy {
      font-weight: 600;
      font-size: 22px;
      margin: 0 0 10px 0;
    }
  }
`;

const OrderCardContainer = styled.div`
  width: 100%;
  margin: 15px auto 20px auto;
  height: 500px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colorCream};
    border-radius: 10px;
    border: 1px solid ${colorNavbar};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colorNavbar};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colorDark};
  }
`;

const DeliveryContainer = styled.div`
  .btn-group {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .btn-option {
      background-color: ${colorDelivery};
      color: ${colorCream};
      font-weight: bold;
      &:hover {
        background-color: ${colorHoverDelivery};
      }
      &.selected {
        background-color: ${colorHoverDelivery};
      }
    }
  }
  .delivery-container {
    padding: 15px;
  }
`;

const PaymentContainer = styled.div``;

const ButtonContainer = styled.div`
  max-width: calc(100% - 20px);
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  OrderCardContainer,
  ButtonContainer,
  DeliveryContainer,
  PaymentContainer,
  EmptyShoppingCart
};

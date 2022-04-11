/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  colorInvoiceLight,
  colorBrown,
  colorBrownSoft,
  colorDark,
  colorNavbar,
  colorCream,
  colorCreamSoft
} from '../../../../styles/variables.styled';

const SingleOrderContainer = styled.div`
  margin: 20px 0;
  text-align: left;
  .container {
    .text {
      margin: 0;
      color: ${colorBrown};
      &.bottom {
        margin-bottom: 10px;
      }
      &.extra-bottom {
        margin-bottom: 20px;
      }

      &.title {
        font-weight: bold;
        font-size: 18px;
      }
      &.title600 {
        font-weight: 600;
        font-size: 16px;
      }
      &.soft {
        color: ${colorBrownSoft};
      }
      .soft {
        color: ${colorBrownSoft};
      }
    }
    .row {
      .col-4,
      .col-8 {
        .order-info {
          display: flex;
          .icon {
            height: fit-content;
            margin-right: 10px;
            border: none;
            background: transparent;
            padding: 0;
          }
        }
        .order-number-description {
          .texticon {
            display: flex;
            .icon {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
  &.dark {
    .container {
      .text {
        color: ${colorCream};
        &.soft {
          color: ${colorCreamSoft};
        }
        .soft {
          color: ${colorCreamSoft};
        }
      }
    }
  }
`;

const SingleOrderInfoContainer = styled.div`
  width: calc(100% - 40px);
  margin: auto;
  box-shadow: 0px 0px 10px ${colorBrown};
  background: ${colorInvoiceLight};
  color: ${colorNavbar};
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: left;
  padding: 20px;
  border: none;
  &.dark {
    color: ${colorCream};
    background: ${colorDark};
    box-shadow: 0px 0px 6px ${colorCream};
  }
`;

const SingleOrderRetire = styled.div`
  width: calc(100% - 40px);
  margin: auto;
  background: ${colorInvoiceLight};
  color: ${colorNavbar};
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: left;
  padding: 20px;
  border: none;

  &.dark {
    color: ${colorCream};
    background: ${colorDark};

    .container {
      .text {
        color: ${colorCream};
        &.soft {
          color: ${colorCreamSoft};
        }
        .soft {
          color: ${colorCreamSoft};
        }
      }
    }
  }
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export { SingleOrderContainer, SingleOrderInfoContainer, SingleOrderRetire, ProductsGrid };

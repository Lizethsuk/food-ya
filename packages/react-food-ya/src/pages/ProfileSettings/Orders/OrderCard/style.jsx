import styled from 'styled-components';
import {
  colorInvoiceLight,
  colorBrown,
  colorDark,
  colorNavbar,
  colorCream
} from '../../../../styles/variables.styled';

const OrderCardContainer = styled.button`
  width: calc(80% - 40px);
  margin: auto;
  box-shadow: 0px 0px 10px ${colorBrown};
  background: ${colorInvoiceLight};
  color: ${colorNavbar};
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: left;
  padding: 20px;
  border: none;

  .row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0px;
    }
    .col,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-9,
    .col-10 {
      &.subcontainer {
        display: flex !important;
        .order-container {
          max-width: 100%;
          width: 100%;

          .card-text {
            max-width: 100%;
            width: 100%;
          }
        }
      }
      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 15px;
        &.bottom {
          margin: 0px 15px 20px;
        }
      }
      .card-text {
        max-width: 100%;
        width: 100%;
        margin: 0;
        &.card-title {
          font-weight: bold;
        }
        &.align-right {
          text-align: right;
        }
      }
    }
  }

  &.dark {
    color: ${colorCream};
    background: ${colorDark};
    box-shadow: 0px 0px 6px ${colorCream};
  }
`;
export { OrderCardContainer };

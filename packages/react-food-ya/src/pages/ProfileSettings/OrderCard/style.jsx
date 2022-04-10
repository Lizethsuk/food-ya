/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  colorInvoiceLight,
  colorBrown,
  colorDark,
  colorNavbar,
  colorCream
} from '../../../styles/variables.styled';

const OrderCardContainer = styled.div`
  width: calc(80% - 40px);
  margin: auto;
  box-shadow: 0px 0px 10px ${colorBrown};
  background: ${colorInvoiceLight};
  color: ${colorNavbar};
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: left;
  padding: 20px;

  .row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0px;
    }
    .col,
    .col-2,
    .col-3,
    .col-4,
    .col-6,
    .col-10 {
      &.subcontainer {
        display: flex !important;
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

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  colorInvoiceLight,
  colorBrown,
  colorDark,
  colorNavbar,
  colorCream
} from '../../styles/variables.styled';

const InvoiceContentContainer = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InvoiceContainer = styled.div`
  width: calc(40% - 40px);
  text-align: center;
  color: ${colorNavbar};
  background: ${colorInvoiceLight};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px ${colorBrown};

  .invoice-title {
    font-size: 30px;
    margin-bottom: 25px;
  }

  .invoice-section {
    margin-bottom: 10px;

    .title {
      font-size: 22px;
      margin: 0;
    }
    .content {
      font-size: 20px;
      margin: 0;
    }
    &:last-of-type {
      margin-bottom: 25px;
    }
  }

  &.dark {
    color: ${colorCream};
    background: ${colorDark};
    box-shadow: 0px 0px 6px ${colorCream};
  }
`;
export { InvoiceContentContainer, InvoiceContainer };

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { colorNavbar, colorCream, colorDark } from '../../../styles/variables.styled';

const OrderCardContainer = styled.div`
  /* max-width: calc(45% - 20px); */
  width: 100%;
  overflow-y: scroll;
  height: 500px;
  margin: 15px auto 20px auto;
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

export { OrderCardContainer };

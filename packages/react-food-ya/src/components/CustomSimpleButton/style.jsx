/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  colorGreen,
  colorCream,
  colorHoverGreen,
  colorDisabledGreen
} from '../../styles/variables.styled';

const ButtonContainer = styled.button`
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px 25px;
  text-decoration: none;
  background: ${colorGreen};
  display: block;
  transition: all 0.2s ease;
  &.default {
    width: 100%;
    max-width: 150px;
    height: 50px;
  }
  &.fit-content {
    width: fit-content;
    height: fit-content;
  }
  &.margin-top {
    margin: auto;
    margin-top: 20px;
  }
  &.margin {
    margin-bottom: 20px;
  }
  &.full {
    height: fit-content;
    max-width: calc(100% - 20px);
    width: 100%;
    margin: 0 auto;
  }
  &.center {
    margin: auto;
  }
  &.content {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  &:disabled {
    background: ${colorDisabledGreen};
  }
  &:hover {
    background: ${colorHoverGreen};
    color: ${colorCream};
  }
  svg {
    path {
      stroke: ${colorCream};
    }
  }
`;

export { ButtonContainer };

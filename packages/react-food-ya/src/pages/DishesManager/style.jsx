/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { colorBrown } from '../../styles/variables.styled';

const OffCanvasTitle = styled.h2`
  color:${colorBrown};
  font-size:40px;
`;

const OrderCard = styled.div`
  max-width: calc(100% - 20px);
  width: 100%;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 0px auto 20px;
  border-radius: 10px;
  overflow-x: hidden;
  display: flex;
  padding: 0px;
  justify-content: space-between;
  .div-description {
    text-align:left;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding: 10px 0px 5px 5px;
    max-width: 185px;
    width: 100%;
    h2 {
      margin-bottom: 5px;
      margin-top: 0px;
      text-align: left;
      font-size: 16px;
      line-height: 13.1px;
    }
    h3 {
      margin: 0;
      font-size: 18px;
    }
    p {
      font-size: 12px;
      margin-bottom: 0px;
      line-height: 14px;
    }
    .ulStars {
      list-style: none;
      padding-left: 0px;
      margin: 0px;
      .star {
        font-size: 17.3px;
        letter-spacing: 0rem;
        color: goldenrod;
        line-height: 12px;
      }
    }
  }
  .div-img {
    img{
      width: 120px;
      height: 120px;
      object-fit: none;
      display: block;
    }
  }
  .mid-container{
    display:flex;
    justify-content:center;
    align-items: center;
  }
  @media (max-width: 480px) {
    .div-img{
      img{
        width: 107px;
      }
    }
  }
`;

const TotalContainer = styled.p`
  width: 100%;
  text-align: right;
  border-top: 2.5px solid ${colorBrown};
  max-width: calc(100% - 20px);
  padding: 15px 0;
  margin:0 10px;
  font-size:25px;
  font-weight:600;
  color:${colorBrown};
`;

export { OffCanvasTitle, OrderCard, TotalContainer };

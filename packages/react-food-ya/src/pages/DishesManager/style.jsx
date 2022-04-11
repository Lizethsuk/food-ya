import styled from 'styled-components';
import { colorBrown, colorCream, colorDarkModeBG } from '../../styles/variables.styled';

const OffCanvasTitle = styled.h2`
  color: ${colorBrown};
  font-size: 40px;
`;

const OrderCard = styled.div`
  position: relative;
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
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0px 5px 5px;
    max-width: 185px;
    width: 100%;
    .card-title {
      margin-bottom: 5px;
      margin-top: 0px;
      text-align: left;
      font-size: 16px;
      line-height: 13.1px;
    }
    .card-price {
      margin: 0;
      font-size: 16px;
    }
    .card-description {
      font-size: 12px;
      margin-bottom: 0px;
      line-height: 14px;
    }
    .card-value {
      margin: 0;
      font-size: 18px;
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
  .delete-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 10px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: #ffffffab;
    border: none;
    box-shadow: 1px 2px 5px black;
  }
  .div-img {
    img {
      width: 120px;
      height: 120px;
      object-fit: none;
      display: block;
    }
  }
  .mid-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    .div-img {
      img {
        width: 107px;
      }
    }
  }
  &.checkout {
    height: 200px;
    justify-content: flex-start;

    .div-img {
      img {
        width: 200px;
        height: 200px;
        object-fit: none;
        display: block;
      }
    }
    .div-description {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 10px 0px 5px 20px;
      max-width: 185px;
      width: 100%;
      .card-title {
        margin-bottom: 10px;
        margin-top: 0px;
        text-align: left;
        font-size: 20px;
        line-height: 13.1px;
      }
      .card-price {
        margin: 0px 0px 5px 0px;
        font-size: 20px;
      }
      .card-description {
        font-size: 16px;
        margin-bottom: 15px;
        line-height: 14px;
      }
      .card-value {
        margin: 0;
        font-size: 18px;
      }
      .ulStars {
        height: fit-content;
        list-style: none;
        padding-left: 0px;
        margin: 0px 0px 10px 0px;
        .star {
          font-size: 21.3px;
          letter-spacing: 0rem;
          color: goldenrod;
          line-height: 12px;
        }
      }
    }
    @media (max-width: 720px) {
      height: 150px;
      .div-img {
        img {
          width: 150px;
          height: 150px;
          object-fit: none;
          display: block;
        }
      }
      .div-description {
        max-width: 150px;
        padding: 10px 0px 5px 10px;

        .card-title {
          margin-bottom: 10px;
          font-size: 18px;
        }
        .card-price {
          font-size: 16px;
        }
        .card-description {
          font-size: 12px;
          margin-bottom: 15px;
        }
        .card-value {
          margin: 0;
          font-size: 14px;
        }
        .ulStars {
          .star {
            font-size: 17.3px;
            letter-spacing: 0rem;
            color: goldenrod;
            line-height: 12px;
          }
        }
      }
    }
  }
  &.dark {
    background-color: ${colorDarkModeBG};
    .mid-container {
      color: ${colorCream};
    }
    .div-description {
      .card-title {
        color: ${colorCream};
      }
      .card-price {
        color: ${colorCream};
      }
      .card-description {
        color: ${colorCream};
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
  margin: 0 10px;
  font-size: 25px;
  font-weight: 600;
  color: ${colorBrown};
  &.checkout {
    margin: auto;
    padding-right: 30px;
    &.dark {
      border-top: 2.5px solid ${colorCream};
      color: ${colorCream};
    }
  }
`;

export { OffCanvasTitle, OrderCard, TotalContainer };

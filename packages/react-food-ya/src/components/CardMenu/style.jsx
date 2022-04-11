import styled from 'styled-components';

const CardMenuContainer = styled.div`
  max-width: 390px;
  width: 100%;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 0px auto 20px;
  border-radius: 10px;
  overflow-x: hidden;
  display: flex;
  padding: 0px;
  justify-content: space-between;
  .content-div {
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
      margin: 5px auto;
      font-size: 18px;
    }
    p {
      font-size: 12px;
      margin-bottom: 0px;
      line-height: 14px;
    }
  }
  .divBtn {
    margin: auto 5px;
    padding: 0px 6px 5px;
    background-color: rgb(234, 227, 227);
    border-radius: 20px;
    p {
      margin-bottom: 0px;
    }
    .btn {
      padding: 0px;
      background: transparent;
      border: none;
    }
    .btnPlus {
      fill: #4c4c4c;
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      font-size: 12px;
      text-decoration: none;
      line-height: 36px;
    }
  }

  .div-description {
    text-align: left;
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
    img {
      width: 120px;
      height: 120px;
      object-fit: none;
      display: block;
    }
  }
  @media (max-width: 480px) {
    .content-div {
      h2 {
        font-size: 13.5px;
        line-height: 13px;
      }
    }
    .div-img {
      img {
        width: 107px;
      }
    }
  }
`;
export { CardMenuContainer };

import styled from 'styled-components';

const DivMenu = styled.div`
  text-align: center;
  h4 {
    font-size: 30px;
    margin-bottom: 40px;
  }
  @media (max-width: 992px) {
    h4 {
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
`;

const InfoRestaurant = styled.div`
  margin: 10px auto 20px;
  background-color: #ffffff;
  width: 100%;
  max-height: 400px;
  padding: 15px 25px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  img {
    border-radius: 200px;
    width: 120px;
    margin: 0 auto;
  }
  h1 {
    font-size: 1.9rem;
  }
  .ulDescription {
    list-style: none;
    padding-left: 0px;
    text-align: left;
    justify-content: center;
    align-items: center;
    max-width: 244px;
    width: 100%;
    margin: auto;

    li {
      margin-bottom: 12px;
      font-size: 17.5px;
      display: flex !important;
      justify-content: left;
      align-items: center;
      line-height: 15px;

      svg {
        padding-right: 4px;
        color: #4c4c4c;
        font-size: 27px;
      }
    }
  }
  @media (max-width: 992px) {
    margin: 10px auto 20px;
    padding: 15px 5px;
    max-width: 450px;
    width: 100%;
    h1 {
      font-size: 1.9rem;
    }

    .ulDescription {
      text-align: center;
      display: flex;
      max-width: 405px;
      width: 100%;
      margin: auto;
      li {
        line-height: 30px;
        display: inline;
        padding: 10px 5px;
        font-size: 17.4px;
      }
    }
  }
  @media (max-width: 480px) {
    .ulDescription {
      display: block;
      max-width: 244px;
      width: 100%;
      margin: auto;
      li {
        line-height: 17px;
        display: inline;
        padding: 0px 15px;
        font-size: 17.4px;
      }
    }
  }
`;
export { DivMenu, InfoRestaurant };

import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const FormCustome = styled(Form)`
  padding: 0px 5px 0px 39px;
  position: relative;
  height: 40px;
  display: flex;
  background-color: #ffffff;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  margin: 30px auto;
  .divIcon {
    position: absolute;
    left: 16px;
    bottom: 0;
    top: -10px;
    margin: auto;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    svg {
      font-size: 23px;
    }
  }
  .searchInp {
    font-size: 18px;
    display: inline-block;
    margin-right: 5px;
    border: none;
    width: 100%;
    :focus {
      outline: none;
    }
  }
  .buttonInp {
    position: absolute;
    right: 0px;
    height: 100%;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    color: #ffffff;
    background-color: #fa0050;
    border: none;
    font-size: 19px;
    padding: 0px 10px;
    font-weight: bold;
  }
`;

export default FormCustome;

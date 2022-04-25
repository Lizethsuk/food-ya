import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CONFIG from '../../utils/host';

/* import ConfirmationRegister from '../../pages/ConfirmationRegister';
 */ /* import Col from 'react-bootstrap/Col';
 */ /* import PropTypes from 'prop-types';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'; */
/* import './style.scss'; */
const funcFetch = async (token) => {
  const res = await fetch(`${CONFIG.url}/confirmation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  });
  return res.json();
};

function Confirmation() {
  const { token } = useParams();
  const navigate = useNavigate();
  const sendToken = async () => {
    const resp = await funcFetch(token);
    console.log(resp);
    navigate('/sign-in-user');
  };
  return (
    <div>
      <h1>GRACIAS</h1>
      <button type="button" onClick={sendToken}>
        Confirmar!
      </button>
    </div>
  );
}

export default Confirmation;

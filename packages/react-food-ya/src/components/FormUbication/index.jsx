/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useState } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import './style.scss';
/* import MapComponent from '../MapComponent';
 */
// import CustomButton from '../CustomButton';

function FormUbication() {
  const [ubication, setUbication] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleChange = (e) => {
    setUbication(e.target.value);
  };

  const funcLocal = () => {
    localStorage.setItem('ubication', ubication);
    navigate('/sign-in-selection');
  };

  return (
    <div>
      <Button className="Reg-button mb-4" onClick={funcLocal}>
        Usar mi ubicación actual
      </Button>
      <div>
        <form onSubmit={handleShow}>
          <input
            onChange={handleChange}
            className="Reg-button"
            type="text"
            name="ubication"
            placeholder="Ingrese su dirección"
          />
        </form>
      </div>
      {/*  <MapComponent /> */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Regresar
          </Button>
          <Button variant="primary" onClick={funcLocal}>
            Confirmar ubicacion
          </Button>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer />
      </Modal>
    </div>
  );
}

export default FormUbication;

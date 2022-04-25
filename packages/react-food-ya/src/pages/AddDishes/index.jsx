/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import './style.scss';
import CardMenuRestaurant from '../../components/CardMenuRestaurant';
import CONFIG from '../../utils/host';

function AddDishes() {
  const [data, setData] = useState({});
  const [img, setImg] = useState();
  const [prevImg, setPrevImg] = useState();

  const funcChanges = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setData({ ...data, [nameInput]: valueInput });
  };

  const prevFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPrevImg(reader.result);
    };
  };

  const funcChangeImg = (e) => {
    const imageFile = e.target.files[0];
    prevFile(imageFile);
    setImg(imageFile);
  };

  const sendImg = async (image) => {
    const res = await fetch(`${CONFIG.url}/api/dish/`, {
      method: 'POST',
      body: JSON.stringify({ img: image, token: localStorage.getItem('token'), product: data }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    });
    const resjson = await res.json();
    console.log(resjson);
    if (resjson.message === 'create') {
      setData({});
      setPrevImg('');
      document.getElementById('form-upload-dish').reset();
      alert('Plato creado');
    }
  };

  const sendData = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      sendImg(reader.result);
    };
  };

  return (
    <Container fluid className="restaurant-section">
      <Row>
        <Col lg={12}>
          <h1 className="title-section">Agregar plato</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form id="form-upload-dish">
            <Form.Group className="mb-1" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                name="dishName"
                onChange={funcChanges}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Precio
              </Form.Label>
              <Form.Control type="text" placeholder="Precio" name="price" onChange={funcChanges} />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Descripcion
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripcion"
                name="description"
                onChange={funcChanges}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label column sm="2">
                Categoría
              </Form.Label>
              <Form.Select name="category" onChange={funcChanges}>
                <option hidden>Elija una categoria</option>
                {[
                  'Pollo a la brasa, carnes y parrillas',
                  'Pizzas y pastas',
                  'Hamburguesa, salchipapa y más',
                  'Comida oriental',
                  'Comida mexicana',
                  'Café, jugos y postres',
                  'Comida criolla',
                  'Comida marina',
                  'Complementos'
                ].map((categoria) => (
                  <option>{categoria}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label column sm="2">
                Imagen
              </Form.Label>
              <Form.Control type="file" name="imagen" onChange={funcChangeImg} />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" onClick={sendData}>
                Agregar producto +
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col lg={6}>
          <div className="divCards">
            <Container fluid>
              <CardMenuRestaurant
                name={data.dishName}
                price={data.price}
                description={data.description}
                img={prevImg}
                size={12}
              />
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddDishes;

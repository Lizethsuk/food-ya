/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import {
  Row, Container, Col, Form, Button,
} from 'react-bootstrap';
import './style.scss';
import CardMenuRestaurant from '../../components/CardMenuRestaurant';

function UpdateRestaurant() {
  const [data, setData] = useState({});
  const [img, setImg] = useState();
  /*   const [existImage, setExistImage] = useState(false);
 */ const [prevImg, setPrevImg] = useState();
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
    await fetch('http://localhost:3001/api/image', {
      method: 'POST',
      body: JSON.stringify({ imagen: image, token: localStorage.getItem('token'), products: data }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  const sendData = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      console.log('enviando');
      console.log(data);
      sendImg(reader.result);
    };
  };

  return (
    <Container fluid className="restaurant-section">
      <Row>
        <Col lg={4}>
          <Form>
            <Form.Group className="mb-1" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Form.Control type="text" placeholder="Nombre del producto" name="name" onChange={funcChanges} />
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
              <Form.Control type="text" placeholder="Descripcion" name="description" onChange={funcChanges} />

            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label column sm="2">Imagen</Form.Label>
              <Form.Control type="file" name="imagen" onChange={funcChangeImg} />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" onClick={sendData}>Agregar producto +</Button>
            </Form.Group>
          </Form>
        </Col>
        <Col lg={8}>
          <div className="divCards">
            <Container>
              <Row>
                <CardMenuRestaurant
                  name={data.name}
                  price={data.price}
                  description={data.description}
                  img={prevImg}
                />

              </Row>
            </Container>

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateRestaurant;

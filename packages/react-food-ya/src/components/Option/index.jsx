import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import './style.scss';

function Option({ imgContent, text, content, url }) {
  return (
    <Col md={6}>
      <Card>
        <Card.Img variant="top" src={imgContent} alt="A" />
        <Card.Body>
          <Card.Title>{text}</Card.Title>
          <CustomButton content={content} url={url} />
        </Card.Body>
      </Card>
    </Col>
  );
}

Option.propTypes = {
  imgContent: PropTypes.string,
  text: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string
};

Option.defaultProps = {
  imgContent: 'Default Image',
  text: 'Default Text',
  content: 'Default Description',
  url: 'defaultUrl'
};

export default Option;

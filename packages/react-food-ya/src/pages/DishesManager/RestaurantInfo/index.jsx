import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { VscHistory, VscStarFull } from 'react-icons/vsc';
import ShowDishes from '../ShowDishes';
import { DivMenu, InfoRestaurant } from './style';

function RestaurantInfo({ name, innerImg, schedule, points }) {
  return (
    <Row>
      <Col lg={3}>
        <InfoRestaurant>
          <h1>{name}</h1>
          <img src={innerImg} alt="" />
          <ul className="ulDescription">
            <li>
              <VscHistory />
              <span>{schedule}</span>
            </li>
            <li>
              <VscStarFull />
              <span>{points}</span>
            </li>
          </ul>
        </InfoRestaurant>
      </Col>
      <Col lg={9}>
        <DivMenu>
          <h4>Menú de {name}</h4>
          <Container fluid>
            <ShowDishes />
          </Container>
        </DivMenu>
      </Col>
    </Row>
  );
}

RestaurantInfo.propTypes = {
  name: PropTypes.string,
  innerImg: PropTypes.string,
  schedule: PropTypes.string,
  points: PropTypes.number
};

RestaurantInfo.defaultProps = {
  name: 'Los Defaults',
  innerImg: 'NOT IMAGE',
  schedule: 'de 0 a 0',
  points: 5
};

export default RestaurantInfo;

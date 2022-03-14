/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import CustomSimpleButton from '../../../components/CustomSimpleButton';
import { OrderCard, TotalContainer } from '../../DishesManager/style';
import { OrderCardContainer } from './style';

function CheckoutSteps({ page, selectedMenu, GetTotal, setPage }) {
  return (
    <div>
      {page === 0 && (
        <>
          <h2>Checkout Order</h2>
          <OrderCardContainer>
            {selectedMenu.map((item) => (
              <OrderCard className="checkout" key={item.id}>
                <div className="div-img">
                  <img className="imgAvatar" src={item.img} alt="" />
                </div>
                <div className="div-description">
                  <h2 className="card-title">{item.name}</h2>
                  <ul className="ulStars">
                    <li className="star">{' ★ '.repeat(item.points)}</li>
                  </ul>
                  <h3 className="card-price">S/ {item.price}</h3>
                  <p className="card-description">{item.description}</p>
                  <h3 className="card-value">Cantidad x {item.value}</h3>
                </div>
              </OrderCard>
            ))}
          </OrderCardContainer>

          <TotalContainer className="checkout">Total: S/ {GetTotal()}</TotalContainer>
          <CustomSimpleButton
            disabled={false}
            content={<>Page2</>}
            buttonStyle="fit-content center content"
            callback={() => {
              setPage(1);
            }}
          />
        </>
      )}
      {page === 1 && (
        <>
          <h2>Delivery</h2>
          <CustomSimpleButton
            disabled={false}
            content={<>Page1</>}
            buttonStyle="fit-content center content"
            callback={() => {
              setPage(0);
            }}
          />
          <CustomSimpleButton
            disabled={false}
            content={<>Page1</>}
            buttonStyle="fit-content center content"
            callback={() => {
              setPage(2);
            }}
          />
        </>
      )}
      {page === 2 && (
        <>
          <h2>Payment Type</h2>
          <CustomSimpleButton
            disabled={false}
            content={<>Page1</>}
            buttonStyle="fit-content center content"
            callback={() => {
              setPage(1);
            }}
          />
        </>
      )}
    </div>
  );
}

CheckoutSteps.propTypes = {
  page: PropTypes.number,
  selectedMenu: PropTypes.array,
  GetTotal: PropTypes.func,
  setPage: PropTypes.func
};

CheckoutSteps.defaultProps = {
  page: 0,
  selectedMenu: [],
  GetTotal: null,
  setPage: null
};

export default CheckoutSteps;

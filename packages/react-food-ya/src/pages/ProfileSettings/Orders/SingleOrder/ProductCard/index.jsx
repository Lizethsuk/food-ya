/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { ProductCardContainer } from './style';

function ProductCard({ product }) {
  return (
    <ProductCardContainer>
      <div className="product-card-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-card-info">
        <p className="text title600">{`Nombre del plato: ${product.name}`}</p>
        <p className="text">{`Descripción: ${product.description}`}</p>
        <p className="text">{`Precio: S/ ${product.price}`}</p>
        <p className="text bottom">{`Cantidad: ${product.value}`}</p>
      </div>
    </ProductCardContainer>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object
};

ProductCard.defaultProps = {
  product: {}
};

export default ProductCard;

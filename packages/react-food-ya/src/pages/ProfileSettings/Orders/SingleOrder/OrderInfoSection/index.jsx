import PropTypes from 'prop-types';

function OrderInfoSection({ title, content }) {
  return (
    <p className="text bottom">
      <span className="soft">{title}</span> <span>{content}</span>
    </p>
  );
}

OrderInfoSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

OrderInfoSection.defaultProps = {
  title: 'Default Title',
  content: 'Default Content'
};

export default OrderInfoSection;

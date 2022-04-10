import PropTypes from 'prop-types';

function InvoiceSection({ title, content }) {
  return (
    <div className="invoice-section">
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
    </div>
  );
}

InvoiceSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

InvoiceSection.defaultProps = {
  title: 'Default Title',
  content: 'Default Content'
};

export default InvoiceSection;

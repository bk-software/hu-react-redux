import PropTypes, { shape } from 'prop-types';

function MyComp({ children }) {
  return <div>{children}</div>;
}

const imageType = shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
});

MyComp.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  image: imageType,
};

export default MyComp;

import PropTypes from 'prop-types';

function MyComp(props) {
  return (
    <div>
      My Comp name: {props.name} num:{props.num}
    </div>
  );
}

MyComp.propTypes = {
  name: PropTypes.string,
  num: PropTypes.number.isRequired,
};

export default MyComp;

import ProtoTypes from 'prop-types';

function Card({ card }) {
  return (
    <div>
      <h2>{card.title}</h2>
      <h5>{card.subtitle}</h5>
    </div>
  );
}

Card.protoTypes = {
  card: ProtoTypes.object.isRequired,
};

export default Card;

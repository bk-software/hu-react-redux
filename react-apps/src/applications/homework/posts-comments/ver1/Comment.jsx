import PropTypes from 'prop-types';

export function Comment({ comment }) {
  return (
    <div style={{ border: '4px solid blue' }}>
      <div>name: {comment.name}</div>
      <div>email: {comment.email}</div>
      <p>{comment.body}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

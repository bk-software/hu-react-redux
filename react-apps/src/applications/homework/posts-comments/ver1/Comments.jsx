import { Comment } from './Comment';
import PropTypes from 'prop-types';

export function Comments({ comments }) {
  if (comments.length === 0) {
    return <div>There is no comments for this post</div>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

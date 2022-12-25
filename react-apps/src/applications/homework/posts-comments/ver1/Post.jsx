import PropTypes from 'prop-types';
import { useState } from 'react';

function Comments() {
  return <div>My comments</div>;
}
export function Post({ post }) {
  const [showComments, setShowComments] = useState(false);

  function toggleComments() {
    setShowComments(!showComments);
  }

  return (
    <div
      onClick={toggleComments}
      style={{ border: '1px solid gray', paddingLeft: '10px' }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {showComments && <Comments />}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

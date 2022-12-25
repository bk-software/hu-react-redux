import PropTypes from 'prop-types';
import { useState } from 'react';
import { CommentsView } from './CommentsView';

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
      {showComments && <CommentsView postId={post.id} />}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

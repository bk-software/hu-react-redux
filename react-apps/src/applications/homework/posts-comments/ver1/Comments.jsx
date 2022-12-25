import { useEffect, useState } from 'react';
import axios from 'axios';
import { Comment } from './Comment';

export function Comments({ postId }) {
  const [comments, setComments] = useState();

  useEffect(() => {
    async function fetchComments() {
      const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
      const response = await axios.get(commentsUrl);
      console.log({ response });
      setComments(response.data);
    }

    fetchComments();
  }, [postId]);

  if (!comments) {
    return <div>Loading comments ...</div>;
  }

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

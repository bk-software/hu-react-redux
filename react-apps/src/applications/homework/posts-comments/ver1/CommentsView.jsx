import { useEffect, useState } from 'react';
import axios from 'axios';
import { Comments } from './Comments';

export function CommentsView({ postId }) {
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

  return <Comments comments={comments} />;
}

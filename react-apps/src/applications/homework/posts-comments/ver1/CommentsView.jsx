import { useEffect, useState } from 'react';
import axios from 'axios';
import { Comments } from './Comments';

function useGetDataFromUrl(commentsUrl) {
  const [comments, setComments] = useState();

  useEffect(() => {
    async function fetchComments() {
      const response = await axios.get(commentsUrl);
      console.log({ response });
      setComments(response.data);
    }

    fetchComments();
  }, [commentsUrl]);

  return comments;
}

export function CommentsView({ postId }) {
  const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  const comments = useGetDataFromUrl(commentsUrl);

  if (!comments) {
    return <div>Loading comments ...</div>;
  }

  return <Comments comments={comments} />;
}

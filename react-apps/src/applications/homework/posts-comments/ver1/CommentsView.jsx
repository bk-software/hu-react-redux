import { useEffect } from 'react';
import { Comments } from './Comments';
import { useGetDataFromUrl } from './useGetDataFromUrl';

export function CommentsView({ postId }) {
  const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  const comments = useGetDataFromUrl(commentsUrl);

  if (!comments) {
    return <div>Loading comments ...</div>;
  }

  return <Comments comments={comments} />;
}

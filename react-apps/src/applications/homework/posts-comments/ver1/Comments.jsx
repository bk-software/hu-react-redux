import { Comment } from './Comment';

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

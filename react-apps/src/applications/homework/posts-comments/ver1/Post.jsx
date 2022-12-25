export function Post({ post }) {
  return (
    <div style={{ border: '1px solid gray', paddingLeft: '10px' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

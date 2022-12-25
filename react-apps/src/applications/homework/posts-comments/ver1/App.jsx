import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Posts({ posts }) {
  if (!posts) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            style={{ border: '1px solid gray', paddingLeft: '10px' }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

//Wrapper Component for the posts
function PostsView() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchPosts() {
      const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
      const response = await axios.get(postsUrl);
      console.log({ response });
      setPosts(response.data);
    }

    fetchPosts();
  }, []);

  return <Posts posts={posts} />;
}

function App() {
  return <PostsView />;
}

export default App;

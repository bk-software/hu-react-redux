import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Posts({ posts }) {
  if (!posts) {
    return <div>Loading posts...</div>;
  }

  return <div>this is my posts {posts.length}</div>;
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

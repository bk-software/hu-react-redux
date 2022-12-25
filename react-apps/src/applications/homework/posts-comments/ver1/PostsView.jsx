import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Posts } from './Posts';

//Wrapper Component for the posts
export function PostsView() {
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

  if (!posts) {
    return <div>Loading posts...</div>;
  }

  return <Posts posts={posts} />;
}

import axios from 'axios';
import { Posts } from './Posts';
import { useGetDataFromUrl } from './useGetDataFromUrl';

//Wrapper Component for the posts
export function PostsView() {
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const posts = useGetDataFromUrl(postsUrl);

  if (!posts) {
    return <div>Loading posts...</div>;
  }

  return <Posts posts={posts} />;
}

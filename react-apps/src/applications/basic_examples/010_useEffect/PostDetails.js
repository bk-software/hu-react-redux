import { useEffect, useState } from 'react';

function PostDetails() {
  const [post, setPost] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component Did Update (CDU) - on Mount and on every render');
  });

  useEffect(() => {
    console.log('Component did mount (CDM)');
    const randomPostId = Math.floor(Math.random() * 100);
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${randomPostId}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setPost(json);
      });
  }, [counter]);

  function count() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>My Post Details</h2>
      <div>
        <button onClick={count}>Count {counter}</button>
      </div>
      {post ? (
        <p>
          {post.id} : {post.title}
        </p>
      ) : null}
    </div>
  );
}

export default PostDetails;

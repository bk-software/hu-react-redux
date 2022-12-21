import { useEffect, useState } from 'react';

export function MyCounter() {
  const [counter, setCounter] = useState(0);
  console.log('My countr is starting');

  useEffect(() => {
    console.log('in use effect', counter);
    document.title = `You clicked ${counter} times`;
  });

  function count() {
    setCounter(counter + 1);
    console.log({ counter });
  }

  return (
    <div>
      {console.log('My countr is rendered')}
      <button onClick={count}>Inc</button>
      {counter}
    </div>
  );
}

import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      // this code we run after one second
      setTime(time + 1);
    }, 1000);
  });

  return <div>{time} seconds</div>;
}

export default Timer;

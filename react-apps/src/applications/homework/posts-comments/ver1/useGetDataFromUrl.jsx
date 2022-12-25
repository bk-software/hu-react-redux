import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetDataFromUrl(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      console.log({ response });
      setData(response.data);
    }

    fetchData();
  }, [url]);

  return data;
}

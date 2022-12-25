import { useDebugValue, useEffect, useState } from 'react';
import axios from 'axios';

const cacheData = {};

export function useGetDataFromUrl(url) {
  const [data, setData] = useState();

  useEffect(() => {
    console.log('cache data:', cacheData);
    if (cacheData[url]) {
      setData(cacheData[url]);
      return;
    }

    async function fetchData() {
      const response = await axios.get(url);
      console.log({ response });
      cacheData[url] = response.data;
      setData(response.data);
    }

    fetchData();
  }, [url]);

  return data;
}

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error, "There was an error");
      }
    };
    fetchData();
  }, [url]);

  return { data };
};

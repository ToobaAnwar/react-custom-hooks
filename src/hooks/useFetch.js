import { useEffect, useState } from 'react';


// use convention needs to follow for function when creating custom hook

// fetch re-useable hook

export function useFetch(fetchFn, initialValue){

    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return{
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
} 
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    setState({ loading: true, data: null, error: null });

    async function getApi() {
      const apiCall = await fetch(url);
      const resp = await apiCall.json();
      return setTimeout(() => {
        setState({
          loading: false,
          data: resp,
          error: null,
        });
      }, 500);
    }
    // setTimeout(() => {
    getApi();
    // }, 4000);
  }, [url]);

  return state;
};

export default useFetch;

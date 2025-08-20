import { useState, useCallback } from 'react';

const useFetch = () => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options) => {
    let response, json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError(`Erro no fetch: ${error.message}`);
    } finally {
      setFetchData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { fetchData, loading, request, error };
};

export default useFetch;

import { createContext } from 'react';
import useFetch from './Hooks/useFetch';
import useLocalStorage from './Hooks/useLocalStorage';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const {
    request,
    setFetchData,
    fetchData,
    setError,
    error,
    loading,
    response,
    jsonReturn,
  } = useFetch();
  const [favMovies, setFavMovies] = useLocalStorage('movie', []);

  const omdbKey = import.meta.env.VITE_API_KEY;

  return (
    <GlobalContext.Provider
      value={{
        request,
        setFetchData,
        fetchData,
        setError,
        error,
        response,
        jsonReturn,
        favMovies,
        setFavMovies,
        loading,
        omdbKey,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

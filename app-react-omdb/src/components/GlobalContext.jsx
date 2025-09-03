import { createContext, useState } from 'react';
import useFetch from './Hooks/useFetch';
import useLocalStorage from './Hooks/useLocalStorage';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [favMovies, setFavMovies] = useLocalStorage('movie', []);
  const [isFavIconActive, setIsFavIconActive] = useState(false);

  const omdbKey = import.meta.env.VITE_API_KEY;

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

  return (
    <GlobalContext.Provider
      value={{
        setUserInput,
        userInput,
        request,
        setFetchData,
        fetchData,
        setError,
        error,
        setIsFavIconActive,
        isFavIconActive,
        response,
        jsonReturn,
        loading,
        favMovies,
        setFavMovies,
        omdbKey,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

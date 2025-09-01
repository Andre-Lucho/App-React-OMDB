import { createContext } from 'react';
import useFetch from './Hooks/useFetch';
import useLocalStorage from './Hooks/useLocalStorage';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const { loading, error } = useFetch();
  const [favMovies, setFavMovies] = useLocalStorage('movie', []);

  const omdbKey = import.meta.env.VITE_API_KEY;

  return (
    <GlobalContext.Provider
      value={{
        setFavMovies,
        favMovies,
        loading,
        error,
        omdbKey,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

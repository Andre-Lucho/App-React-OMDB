import { createContext } from 'react';
import useFetch from './Hooks/useFetch';
import useLocalStorage from './Hooks/useLocalStorage';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const { loading, error } = useFetch();
  const [favMovie, setFavMovie] = useLocalStorage('movie', '');

  const omdbKey = import.meta.env.VITE_API_KEY;

  return (
    <GlobalContext.Provider
      value={{
        setFavMovie,
        favMovie,
        loading,
        error,
        omdbKey,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

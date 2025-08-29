import { createContext, useState, useEffect } from 'react';
import useFetch from './Hooks/useFetch';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const { loading, error } = useFetch();

  const omdbKey = import.meta.env.VITE_API_KEY;

  return (
    <GlobalContext.Provider
      value={{
        loading,
        error,
        omdbKey,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

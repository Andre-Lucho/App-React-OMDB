import { createContext, useState, useEffect } from 'react';
import useFetch from './Hooks/useFetch';
import { Fetch } from './FetchComponents/Fetch';
import { FetchTimer } from './FetchComponents/FetchTimer';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [userInput, setUserInput] = useState('');

  const { request, fetchData, loading, error } = useFetch();
  const omdbKey = import.meta.env.VITE_API_KEY;
  // const handleFetch = Fetch;
  // const handleFetchTimer = FetchTimer;

  return (
    <GlobalContext.Provider
      value={{
        userInput,
        setUserInput,
        request,
        fetchData,
        loading,
        error,
        omdbKey,
        // handleFetch,
        // handleFetchTimer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

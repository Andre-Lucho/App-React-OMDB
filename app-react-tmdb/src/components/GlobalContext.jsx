import { createContext, useState, useEffect } from 'react';
import useFetch from './Hooks/useFetch';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const omdbKey = import.meta.env.VITE_API_KEY;
  const resultsPerPage = 10; // OMDB API returns 10 results per page

  const { request, fetchData, loading, error, response, jsonReturn } =
    useFetch();

  // Calculate total pages when jsonReturn changes
  useEffect(() => {
    if (jsonReturn && jsonReturn.totalResults) {
      const totalResults = parseInt(jsonReturn.totalResults, 10);
      setTotalPages(Math.ceil(totalResults / resultsPerPage));
    }
  }, [jsonReturn]);

  const newFetch = async (e) => {
    if (omdbKey) {
      e.preventDefault();
      await request(
        `http://www.omdbapi.com/?apikey=${omdbKey}&s=${userInput}&page=${currentPage}`,
      );
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        setUserInput,
        setCurrentPage,
        request,
        newFetch,
        userInput,
        currentPage,
        setCurrentPage,
        fetchData,
        loading,
        error,
        response,
        jsonReturn,
        omdbKey,
        totalPages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

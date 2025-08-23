import { createContext, useState, useEffect } from 'react';
import useFetch from './Hooks/useFetch';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movieData, setMovieData] = useState(null);

  const { request, fetchData, loading, error, response, jsonReturn } =
    useFetch();

  const omdbKey = import.meta.env.VITE_API_KEY;
  const resultsPerPage = 10;

  // Calcula o total de paginass qd jsonReturn se atualiza
  useEffect(() => {
    if (jsonReturn && jsonReturn.totalResults) {
      const totalResults = parseInt(jsonReturn.totalResults, 10);
      setTotalPages(Math.ceil(totalResults / resultsPerPage));
    }
  }, [jsonReturn]);

  const newFetch = async (e) => {
    if (omdbKey) {
      // Verifica se e é um evento real antes de chamar preventDefault
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      await request(
        `http://www.omdbapi.com/?apikey=${omdbKey}&s=${userInput}&page=${currentPage}`,
      );
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        setUserInput,
        request,
        newFetch,
        setMovieData,
        setCurrentPage,
        userInput,
        movieData,
        fetchData,
        currentPage,
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

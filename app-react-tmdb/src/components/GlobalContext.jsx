import { createContext, useState, useEffect } from 'react';
import useFetch from './Hooks/useFetch';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  // const [totalPages, setTotalPages] = useState(0);

  const { request, fetchData, loading, error } = useFetch();

  const omdbKey = import.meta.env.VITE_API_KEY;

  // Calcula o total de paginas qd jsonReturn se atualiza
  // useEffect(() => {
  //   if (jsonReturn && jsonReturn.totalResults) {
  //     const totalResults = parseInt(jsonReturn.totalResults, 10);
  //     setTotalPages(Math.ceil(totalResults / resultsPerPage));
  //   }
  // }, [jsonReturn]);

  return (
    <GlobalContext.Provider
      value={{
        request,
        // setCurrentPage,
        fetchData,
        // currentPage,
        loading,
        error,
        omdbKey,
        // totalPages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

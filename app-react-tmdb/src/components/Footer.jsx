import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

const Footer = () => {
  const context = useContext(GlobalContext);

  const { fetchData, currentPage, setCurrentPage, totalPages, newFetch } =
    context;

  const handleNextPage = (e) => {
    if (fetchData && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      newFetch(e);
    }
  };

  const handlePrevPage = (e) => {
    if (fetchData && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      newFetch(e);
    }
  };

  if (totalPages > 1) {
    return (
      <div className="footer-container">
        <button onClick={handlePrevPage} disabled={currentPage <= 1}>
          Retroceder
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
          Prosseguir
        </button>
      </div>
    );
  }

  return null;
};

export default Footer;

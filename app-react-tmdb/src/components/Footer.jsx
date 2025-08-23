import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

const Footer = () => {
  const context = useContext(GlobalContext);

  const { fetchData, currentPage, setCurrentPage, totalPages, newFetch } =
    context;

  const handleNextPage = async () => {
    if (fetchData && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (fetchData && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Atualiza os dados quando a página muda
  useEffect(() => {
    if (fetchData) {
      const event = { preventDefault: () => {} };
      newFetch(event);
    }
  }, [currentPage]);

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

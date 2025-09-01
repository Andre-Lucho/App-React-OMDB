import { useState, useEffect } from 'react';
import { MdArrowBackIos } from 'react-icons/md'; // <MdArrowBackIos />
import { MdArrowForwardIos } from 'react-icons/md'; //<MdArrowForwardIos />

const Footer = ({ movieFetch, setCurrentPage, currentPage }) => {
  const [totalPages, setTotalPages] = useState(null);

  // Controle de páginas
  const resultsPerPage = 10;

  // Cálculo e att do total de páginas retornadas
  useEffect(() => {
    if (movieFetch && movieFetch.totalResults) {
      const totalResults = parseInt(movieFetch.totalResults, 10);
      setTotalPages(Math.ceil(totalResults / resultsPerPage));
    } else {
      setTotalPages(null);
    }
  }, [movieFetch]);

  // Ir para a próxima página
  const handleNextPage = () => {
    if (movieFetch && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Voltar à página anterior
  const handlePrevPage = () => {
    if (movieFetch && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
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

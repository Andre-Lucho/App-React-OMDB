import { useState, useEffect } from 'react';
import '../styles/footer.scss';
import { MdArrowBackIos } from 'react-icons/md'; // <MdArrowBackIos />
import { MdArrowForwardIos } from 'react-icons/md'; //<MdArrowForwardIos />
import FooterButton from '../assets/FooterButton/FooterButton';

const Footer = ({ fetchData, setCurrentPage, currentPage }) => {
  const [totalPages, setTotalPages] = useState(null);

  // Controle de páginas
  const resultsPerPage = 10;

  // Cálculo e att do total de páginas retornadas
  useEffect(() => {
    if (fetchData && fetchData.totalResults) {
      const totalResults = parseInt(fetchData.totalResults, 10);
      setTotalPages(Math.ceil(totalResults / resultsPerPage));
    } else {
      setTotalPages(null);
    }
  }, [fetchData]);

  // Ir para a próxima página
  const handleNextPage = () => {
    if (fetchData && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Voltar à página anterior
  const handlePrevPage = () => {
    if (fetchData && currentPage > 1) {
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

import { useEffect } from 'react';
import { MdArrowBackIos } from 'react-icons/md'; // <MdArrowBackIos />
import { MdArrowForwardIos } from 'react-icons/md'; //<MdArrowForwardIos />

const Footer = ({ movieFetch, setCurrentPage, currentPage, totalPages }) => {
  // Não precisamos mais do useEffect aqui pois o fetch será gerenciado pelo container

  // Função para ir para a próxima página
  const handleNextPage = () => {
    if (movieFetch && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Função para voltar à página anterior
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

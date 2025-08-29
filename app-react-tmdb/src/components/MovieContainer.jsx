import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Loading from '../assets/Loading/Loading';

const MovieContainer = () => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { omdbKey, loading } = context;

  // React-router
  const location = useLocation();
  const input = location.state?.input;
  const navigate = useNavigate();

  // Estados compartilhados
  const [movieFetch, setMovieFetch] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);

  // Controle de páginas
  const resultsPerPage = 10;

  // Fetch Dashboard
  useEffect(() => {
    const newFetch = async () => {
      setError(null);

      if (!omdbKey || !input) {
        setError(`Por Favor, digite um termo para a busca!`);
        return;
      }

      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${omdbKey}&s=${input}&page=${currentPage}`,
        );
        setMovieFetch(response.data);
      } catch (erro) {
        setError(`Erro ao carregar dados: ${erro.message}`);
      }
    };
    newFetch();
  }, [input, currentPage]);

  // Cálculo e att do total de paginas retornadas
  useEffect(() => {
    if (movieFetch && movieFetch.totalResults) {
      const totalResults = parseInt(movieFetch.totalResults, 10);
      setTotalPages(Math.ceil(totalResults / resultsPerPage));
    } else {
      setTotalPages(null);
    }
  }, [movieFetch]);

  // Loading
  if (loading) return <Loading />;

  // Verificação de dados
  if (!input) {
    return (
      <div className="no-data-container">
        <p>Por favor, digite um termo para a busca!</p>
      </div>
    );
  }

  return (
    <>
      <Dashboard movieFetch={movieFetch} error={error} />
      <Footer
        movieFetch={movieFetch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default MovieContainer;

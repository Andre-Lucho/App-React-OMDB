import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import axios from 'axios';
import Dashboard from '../Dashboard';
import Footer from '../Footer';
import Loading from '../../assets/Loading/Loading';

const DashContainer = () => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { omdbKey, loading, setFavMovies } = context;

  // React-router
  const location = useLocation();
  const input = location.state?.input;

  // Estados compartilhados
  const [movieFetch, setMovieFetch] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

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
  }, [input, omdbKey, currentPage]);

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
      <Dashboard
        movieFetch={movieFetch}
        setFavMovies={setFavMovies}
        error={error}
      />
      <Footer
        movieFetch={movieFetch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default DashContainer;

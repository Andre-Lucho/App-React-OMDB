import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import Dashboard from '../Dashboard';
import Footer from '../Footer';
import Loading from '../../assets/Loading/Loading';

import '../../styles/dashboard.scss';

const DashContainer = () => {
  // Contexto global
  const {
    request,
    fetchData,
    loading,
    error,
    favMovies,
    setFavMovies,
    isFavIconActive,
    setIsFavIconActive,
    omdbKey,
  } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);

  // React-router
  const location = useLocation();
  const input = location.state?.input;

  // Fetch Dashboard
  useEffect(() => {
    const newFetch = async (url) => {
      await request(url);
    };
    newFetch(
      `http://www.omdbapi.com/?apikey=${omdbKey}&s=${input}&page=${currentPage}`,
    );
  }, [input, omdbKey, currentPage]);

  // Verificação de dados
  if (!omdbKey) {
    return (
      <div className="no-omdb-input-container">
        <p>Você precisa de uma chave OMDB para a realizar a busca!</p>
      </div>
    );
  }
  if (!input) {
    return (
      <div className="no-omdb-input-container">
        <p>Por favor, digite um termo para a busca!</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }

  if (error) {
    <p>{error}</p>;
  }

  return (
    <>
      <Dashboard
        fetchData={fetchData}
        setFavMovies={setFavMovies}
        favMovies={favMovies}
        error={error}
        loading={loading}
        isFavIconActive={isFavIconActive}
        setIsFavIconActive={setIsFavIconActive}
      />
      <Footer
        fetchData={fetchData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default DashContainer;

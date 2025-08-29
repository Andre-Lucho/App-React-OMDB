import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

import Loading from '../assets/Loading/Loading';

const Dashboard = () => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { omdbKey, loading } = context;

  // React-router
  const location = useLocation();
  const input = location.state?.input;
  const navigate = useNavigate();

  // Retorno e tratamento do fetch dasboard
  const [movieFetch, setMovieFetch] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(true);

  // Controle de páginas
  const resultsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // Fetch Dashboard
  useEffect(() => {
    const newFetch = async () => {
      setError(null);
      let response;

      if (!omdbKey || !input) {
        setError(`Por Favor, digite um termo para a busca!`);
        return;
      }
      try {
        response = await axios.get(
          `http://www.omdbapi.com/?apikey=${omdbKey}&s=${input}&page=${currentPage}`,
        );
        setMovieFetch(response.data);
      } catch (erro) {
        setError(`Erro ao carregar dados: ${erro.message}`);
      }
    };
    newFetch();
  }, [input]);

  // Tratamento fetch
  useEffect(() => {
    if (movieFetch) {
      let data = movieFetch.Search.map((movie) => {
        const { Title, Year, Poster } = movie;
        return {
          Title,
          Year,
          Poster,
        };
      });
      setMovieData(data);
    }
  }, [movieFetch]);

  useEffect(() => console.log(totalPages), [totalPages]);

  // Cálculo e att do total de paginas retornadas
  useEffect(() => {
    if (movieFetch && movieFetch.totalResults) {
      const totalResults = parseInt(movieFetch.totalResults, 10);
      setTotalPages(Math.ceil(totalResults / resultsPerPage));
    }
  }, [movieFetch]);

  // Router - Mandando 'título' p Modal.jsx
  const handleDashSubmit = (movieTitle) => {
    if (movieTitle) {
      navigate(`/modal/${movieTitle}`);
    }
  };

  // Loading
  if (loading) return <Loading />;

  // Error
  if (error)
    return (
      <div className="erro-container">
        <p>Erro ao carregar os dados! Faça uma nova busca...</p>
      </div>
    );

  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {movieData &&
          movieData.map((movie, i) => (
            <li key={i} className="img-container">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-imagem"
              />
              <figcaption className="img-legenda">
                <span>{movie.Title}</span>
                <p>{movie.Year}</p>
                <button onClick={() => handleDashSubmit(movie.Title)}>
                  More Info
                </button>
              </figcaption>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;

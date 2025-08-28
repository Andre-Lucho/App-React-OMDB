import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

import Loading from '../assets/Loading/Loading';

const Dashboard = () => {
  const context = useContext(GlobalContext);
  const { omdbKey, loading } = context;

  const location = useLocation();
  const input = location.state?.input;
  const navigate = useNavigate();

  const [movieFetch, setMovieFetch] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  const resultsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleDashSubmit = (movieTitle) => {
    if (movieTitle) {
      navigate(`/modal/${movieTitle}`);
    }
  };

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
          `http://www.omdbapi.com/?apikey=${omdbKey}&s=${input}&page=${1}`,
        );
        setMovieFetch(response.data);
      } catch (erro) {
        setError(`Erro ao carregar dados: ${erro.message}`);
      }
    };
    newFetch();
  }, [input]);

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

  if (loading) return <Loading />;

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

// 2. com um botal e modal --> fazer novo fetch e utilizar o param &t para pegar detalhes do filme

{
  /* <Link to={`modal/:${movie.Title}`} key={movie.Title}></Link>; */
}

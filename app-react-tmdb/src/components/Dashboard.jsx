import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

import Loading from '../assets/Loading/Loading';

const Dashboard = () => {
  const context = useContext(GlobalContext);
  const { omdbKey, loading } = context;

  const [movieFetch, setMovieFetch] = useState(null);
  const [movieData, setMovieData] = useState(null);

  // const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const location = useLocation();
  const input = location.state?.input;

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
                <button>More Info</button>
              </figcaption>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;

// 2. com um botal e modal --> fazer novo fetch e utilizar o param &t para pegar detalhes do filme

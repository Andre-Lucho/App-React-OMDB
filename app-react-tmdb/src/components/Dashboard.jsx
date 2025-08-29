import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../assets/Loading/Loading';

const Dashboard = ({ movieFetch, error }) => {
  // Tratamento dos dados do fetch
  const [movieData, setMovieData] = useState(null);

  const navigate = useNavigate();

  // Tratamento fetch
  useEffect(() => {
    if (movieFetch && movieFetch.Search) {
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

  // Router - Mandando 'título' p Modal.jsx
  const handleDashSubmit = (movieTitle) => {
    if (movieTitle) {
      navigate(`/modal/${movieTitle}`);
    }
  };

  // Loading é tratado no container

  // Error
  if (error)
    return (
      <div className="erro-container">
        <p>{error}</p>
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

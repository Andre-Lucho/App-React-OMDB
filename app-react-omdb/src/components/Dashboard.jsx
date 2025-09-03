import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SpotlightCard from '../assets/Card/SpotlightCard';
import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Dashboard = ({ fetchData, setFavMovies, favMovies }) => {
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();

  // Tratamento fetch
  useEffect(() => {
    if (fetchData && fetchData.Search) {
      let data = fetchData.Search.map((movie) => {
        const { Title, Year, Poster } = movie;
        return {
          Title,
          Year,
          Poster,
        };
      });
      setMovieData(data);
    }
  }, [fetchData]);

  // Router - Mandando 'título' p Modal.jsx
  const handleDashSubmit = (movieTitle) => {
    if (movieTitle) {
      navigate(`/modalContainer/${movieTitle}`);
    }
  };

  const handleFavMovie = (movieTitle) => {
    setFavMovies((prev) => [...prev, movieTitle]);
  };

  const handleFavExclude = (movieTitle) => {
    if (favMovies && favMovies.length > 0) {
      const movieToExclude = favMovies.filter((movie) => movie !== movieTitle);
      setFavMovies(movieToExclude);
    }
  };

  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {movieData &&
          movieData.map((movie, i) => (
            <SpotlightCard
              key={i}
              className="custom-spotlight-card"
              spotlightColor="rgba(197, 191, 254, 0.2)"
            >
              <li className="img-container">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-imagem"
                />
                <figcaption className="img-legenda">
                  <span>{movie.Title}</span>
                  <p>{movie.Year}</p>
                  <button
                    onClick={() => handleDashSubmit(movie.Title)}
                    className="dash-button"
                  >
                    More Info
                  </button>
                </figcaption>
                {favMovies.some((favMovie) => favMovie === movie.Title) ? (
                  <IoHeartSharp
                    onClick={() => handleFavExclude(movie.Title)}
                    className="dash-heart-icon-active"
                  />
                ) : (
                  <IoHeartOutline
                    onClick={() => handleFavMovie(movie.Title)}
                    className="dash-heart-icon"
                  />
                )}
              </li>
            </SpotlightCard>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;

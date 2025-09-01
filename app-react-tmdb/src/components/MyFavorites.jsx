import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

import { IoCloseCircleOutline } from 'react-icons/io5';

const MyFavorites = () => {
  const context = useContext(GlobalContext);
  const { favMovies, omdbKey, setFavMovies } = context;
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    if (favMovies && favMovies.length > 0) {
      const fetchFavorites = async () => {
        const moviesData = [];
        for (let movie of favMovies) {
          try {
            const response = await axios.get(
              `http://www.omdbapi.com/?apikey=${omdbKey}&t=${movie}`,
            );

            moviesData.push(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        setFavData(moviesData);
      };
      fetchFavorites();
    } else {
      setFavData([]);
    }
  }, [favMovies, omdbKey]);

  const handleFavExclude = (movieTitle) => {
    if (favMovies && favMovies.length > 0) {
      const movieToExclude = favMovies.filter((movie) => movie !== movieTitle);
      setFavMovies(movieToExclude);
    }
  };

  if (favData)
    return (
      <div className="dashboard-container">
        <ul className="galery-container">
          {favData.length > 0 &&
            favData.map((movie, i) => (
              <li key={i} className="img-container">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-imagem"
                />
                <figcaption className="img-legenda">
                  <span>{movie.Title}</span>
                  <p>{movie.Year}</p>
                </figcaption>
                <IoCloseCircleOutline
                  onClick={() => handleFavExclude(movie.Title)}
                  className="icon"
                />
              </li>
            ))}
        </ul>
      </div>
    );
};

export default MyFavorites;

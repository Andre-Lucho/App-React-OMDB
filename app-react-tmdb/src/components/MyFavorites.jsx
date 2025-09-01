import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

const MyFavorites = () => {
  const context = useContext(GlobalContext);
  const { favMovies, omdbKey } = context;
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    console.log(favMovies);
  }, [favMovies]);

  useEffect(() => {
    console.log(favData);
  }, [favData]);

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
          setFavData(moviesData);
        }
      };
      fetchFavorites();
    } else {
      setFavData([]);
    }
  }, [favMovies, omdbKey]);

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
              </li>
            ))}
        </ul>
      </div>
    );
};

export default MyFavorites;

import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import FavoriteMovieItem from './FavoriteMovieItem';
import Loading from '../assets/Loading/Loading';
import '../styles/dashboard.scss';

const MyFavorites = () => {
  const { favMovies, setFavMovies, omdbKey } = useContext(GlobalContext);
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllMovies = async () => {
      setLoading(true);
      const moviePromises = favMovies.map(async (title) => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbKey}&t=${title}`);
        return await response.json();
      });
      const movies = await Promise.all(moviePromises);
      setMoviesData(movies);
      setLoading(false);
    };

    if (favMovies.length > 0) {
      fetchAllMovies();
    } else {
      setMoviesData([]);
    }
  }, [favMovies, omdbKey]);

  const handleFavExclude = (movieTitle) => {
    if (favMovies && favMovies.length > 0) {
      const movieToExclude = favMovies.filter((movie) => movie !== movieTitle);
      setFavMovies(movieToExclude);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (moviesData.length === 0) {
    return (
      <p className="no-omdb-input-container">
        Você ainda não tem filmes favoritos.
      </p>
    );
  }

  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {moviesData.map((movie) => (
          <li key={movie.imdbID}>
            <FavoriteMovieItem
              movieData={movie}
              handleFavExclude={handleFavExclude}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFavorites;
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import FavoriteMovieItem from './FavoriteMovieItem';

const MyFavorites = () => {
  const { favMovies, setFavMovies, loading, omdbKey } =
    useContext(GlobalContext);

  const handleFavExclude = (movieTitle) => {
    if (favMovies && favMovies.length > 0) {
      const movieToExclude = favMovies.filter((movie) => movie !== movieTitle);
      setFavMovies(movieToExclude);
    }
  };

  if (favMovies.length == 0) {
    return (
      <p className="no-omdb-input-container">
        Você ainda não tem filmes favoritos.
      </p>
    );
  }
  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {favMovies?.length > 0 &&
          favMovies.map((title) => (
            <FavoriteMovieItem
              key={title}
              movieTitle={title}
              omdbKey={omdbKey}
              handleFavExclude={handleFavExclude}
              loading={loading}
            />
          ))}
        ;
      </ul>
    </div>
  );
};

export default MyFavorites;

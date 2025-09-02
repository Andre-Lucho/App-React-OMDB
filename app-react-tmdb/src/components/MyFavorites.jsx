import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import FavoriteMovieItem from './FavoriteMovieItem';

import { IoCloseCircleOutline } from 'react-icons/io5';

const MyFavorites = () => {
  const { favMovies, omdbKey, setFavMovies } = useContext(GlobalContext);

  const handleFavExclude = (movieTitle) => {
    if (favMovies && favMovies.length > 0) {
      const movieToExclude = favMovies.filter((movie) => movie !== movieTitle);
      setFavMovies(movieToExclude);
    }
  };

  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {favMovies?.length > 0 ? (
          favMovies.map((title) => (
            <FavoriteMovieItem
              key={title}
              movieTitle={title}
              omdbKey={omdbKey}
              handleFavExclude={handleFavExclude}
            />
          ))
        ) : (
          <p>Você ainda não tem filmes favoritos.</p>
        )}
        ;
      </ul>
    </div>
  );
};

export default MyFavorites;

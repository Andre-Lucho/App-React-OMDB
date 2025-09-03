import { useEffect } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Loading from '../assets/Loading/Loading';

import useFetch from './Hooks/useFetch';

const FavoriteMovieItem = ({
  movieTitle,
  omdbKey,
  handleFavExclude,
  loading,
}) => {
  const { request, fetchData, error } = useFetch();

  useEffect(() => {
    if (movieTitle) {
      request(`http://www.omdbapi.com/?apikey=${omdbKey}&t=${movieTitle}`);
    }
  }, [movieTitle, omdbKey, request]);

  // ver erro
  if (loading) return <Loading />;
  if (error) return <li>Erro ao carregar filme.</li>;
  if (!fetchData) return null;

  return (
    <li className="img-container">
      <img
        src={fetchData.Poster}
        alt={fetchData.Title}
        className="img-imagem"
      />
      <figcaption className="img-legenda">
        <span>{fetchData.Title}</span>
        <p>{fetchData.Year}</p>
      </figcaption>
      <IoCloseCircleOutline
        onClick={() => handleFavExclude(fetchData.Title)}
        className="myFavorite-exclude-icon"
      />
    </li>
  );
};

export default FavoriteMovieItem;

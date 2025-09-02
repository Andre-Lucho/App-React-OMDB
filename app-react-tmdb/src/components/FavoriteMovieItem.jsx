import { useEffect } from 'react';
import useFetch from './Hooks/useFetch'; // Importe o hook diretamente
import { IoCloseCircleOutline } from 'react-icons/io5';

const FavoriteMovieItem = ({ movieTitle, omdbKey, handleFavExclude }) => {
  const { request, fetchData, loading, error } = useFetch();

  useEffect(() => {
    if (movieTitle) {
      request(`http://www.omdbapi.com/?apikey=${omdbKey}&t=${movieTitle}`);
    }
  }, [movieTitle, omdbKey, request]);

  if (loading) return <li>Carregando...</li>;
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
        className="icon"
      />
    </li>
  );
};

export default FavoriteMovieItem;

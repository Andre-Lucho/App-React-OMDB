import '../styles/favoriteMovieItem.scss';
import { IoCloseCircleOutline } from 'react-icons/io5';

const FavoriteMovieItem = ({ movieData, handleFavExclude }) => {
  if (!movieData) return null;

  return (
    <div className="fav-img-container">
      <img
        src={movieData.Poster}
        alt={movieData.Title}
        className="fav-img-imagem"
      />
      <figcaption className="fav-img-legenda">
        <span>{movieData.Title}</span>
        <p>{movieData.Year}</p>
      </figcaption>
      <IoCloseCircleOutline
        onClick={() => handleFavExclude(movieData.Title)}
        className="favorite-exclude-icon"
      />
    </div>
  );
};

export default FavoriteMovieItem;
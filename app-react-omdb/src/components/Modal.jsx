import { useEffect, useContext, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';

import SpotlightCard from '../assets/Card/SpotlightCard';
import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { IoCloseCircleOutline } from 'react-icons/io5';

import '../styles/modal.scss';

const Modal = ({ fetchData, favMovies, setFavMovies }) => {
  const {
    userInput,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleFavMovie = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      setFavMovies((prev) => [...prev, fetchData.Title]);
    }
  };

  const handleFavExclude = (title) => {
    if (favMovies && favMovies.length > 0) {
      const movieToExclude = favMovies.filter((movie) => movie !== title);
      setFavMovies(movieToExclude);
    }
  };

  return (
    <ul className="modal-galery-container">
      <li className="modal-img-container">
        {fetchData && (
          <>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(197, 191, 254, 0.1)"
            >
              <div className="modal-image-wrapper">
                <img
                  src={fetchData.Poster}
                  alt={fetchData.Title}
                  className="img-imagem"
                />
                {favMovies.some((favMovie) => favMovie === fetchData.Title) ? (
                  <IoHeartSharp
                    onClick={() => handleFavExclude(fetchData.Title)}
                    className="modal-heart-icon-active"
                  />
                ) : (
                  <IoHeartOutline
                    onClick={(e) => handleFavMovie(e)}
                    className="modal-heart-icon"
                  />
                )}
              </div>
              <figcaption className="img-legenda">
                <div className="img-legenda-info">
                  <span>Título: {fetchData.Title}</span>
                  <span>Ano: {fetchData.Year}</span>
                  <span>Lançamento: {fetchData.Released}</span>
                  <span>Gênero: {fetchData.Genre}</span>
                  <span>Diretor(s): {fetchData.Director}</span>
                  <span>Elenco: {fetchData.Actors}</span>
                  <span>Sinopse: {fetchData.Plot}</span>
                  <span>País: {fetchData.Country}</span>
                  <span>Classificação IMBD: {fetchData.imdbRating}</span>
                  <span>Premiações: {fetchData.Awards}</span>
                </div>
              </figcaption>
            </SpotlightCard>
          </>
        )}
        <IoCloseCircleOutline
          onClick={() =>
            navigate('/dashContainer', { state: { input: userInput } })
          }
          className="modal-exclude-icon"
        />
      </li>
    </ul>
  );
};

export default Modal;

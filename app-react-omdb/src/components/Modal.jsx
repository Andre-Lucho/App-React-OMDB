import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';

// <IoHeartSharp />

const Modal = ({ fetchData }) => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { setFavMovies } = context;

  const handleFavMovie = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      setFavMovies((prev) => [...prev, fetchData.Title]);
    }
  };

  return (
    <div className="modal-container">
      <ul className="galery-container">
        <li className="img-container">
          {fetchData && (
            <>
              <img
                src={fetchData.Poster}
                alt={fetchData.Title}
                className="img-imagem"
              />

              <figcaption className="img-legenda">
                <span>Título: {fetchData.Title}</span>
                <span>Ano: {fetchData.Year}</span>
                <span>Lançamento: {fetchData.Released}</span>
                <span>Gênero: {fetchData.Genre}</span>
                <span>Diretor(s): {fetchData.Director}</span>
                <span>Elenco: {fetchData.Actores}</span>
                <span>Sinopse: {fetchData.Plot}</span>
                <span>País: {fetchData.Country}</span>
                <span>Classificação IMBD: {fetchData.imdbRating}</span>
                <span>Premiações: {fetchData.Awards}</span>
              </figcaption>
            </>
          )}
        </li>
        <IoHeartOutline onClick={(e) => handleFavMovie(e)} />
      </ul>
    </div>
  );
};

export default Modal;

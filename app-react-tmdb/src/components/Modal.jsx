import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';

// <IoHeartSharp />

const Modal = ({ modalFetch }) => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { setFavMovies } = context;

  const handleFavMovie = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      setFavMovies((prev) => [...prev, modalFetch.Title]);
    }
  };

  return (
    <div className="modal-container">
      <ul className="galery-container">
        <li className="img-container">
          {modalFetch && (
            <>
              <img
                src={modalFetch.Poster}
                alt={modalFetch.Title}
                className="img-imagem"
              />

              <figcaption className="img-legenda">
                <span>Título: {modalFetch.Title}</span>
                <span>Ano: {modalFetch.Year}</span>
                <span>Lançamento: {modalFetch.Released}</span>
                <span>Gênero: {modalFetch.Genre}</span>
                <span>Diretor(s): {modalFetch.Director}</span>
                <span>Elenco: {modalFetch.Actores}</span>
                <span>Sinopse: {modalFetch.Plot}</span>
                <span>País: {modalFetch.Country}</span>
                <span>Classificação IMBD: {modalFetch.imdbRating}</span>
                <span>Premiações: {modalFetch.Awards}</span>
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

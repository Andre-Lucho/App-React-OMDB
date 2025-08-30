import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';

// <IoHeartSharp />

const Modal = () => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { omdbKey, setFavMovie } = context;

  const handleFavMovie = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      setFavMovie(modalFetch.Title);
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
              <IoHeartOutline onClick={(e) => handleFavMovie(e)} />

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
      </ul>
    </div>
  );
};

export default Modal;

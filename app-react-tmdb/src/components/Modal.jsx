import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useLocalStorage from './Hooks/useLocalStorage';

import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';

// <IoHeartSharp />
const Modal = () => {
  const context = useContext(GlobalContext);
  const { omdbKey, loading } = context;

  const { title } = useParams();
  const navigate = useNavigate();

  const [modalFetch, setModalFetch] = useState(null);
  const [favMovie, setFavMovie] = useLocalStorage('movie', '');

  useEffect(() => {
    const fetchModal = async () => {
      if (title) {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${omdbKey}&t=${title}`,
        );
        setModalFetch(response.data);
      }
    };
    fetchModal();
  }, [title, favMovie]);

  const handleFavMovie = (e, title) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      setFavMovie(title);
      navigate(`/favorites/${favMovie}`);
    }
  };

  // useEffect(() => console.log(favMovie), [favMovie]);

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
              <IoHeartOutline onClick={(e) => handleFavMovie(e, title)} />

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

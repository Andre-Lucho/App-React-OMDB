import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Modal = () => {
  const context = useContext(GlobalContext);
  const { omdbKey, loading } = context;

  const { title } = useParams();

  const [modalFetch, setModalFetch] = useState(null);

  useEffect(() => {
    const fetchModal = async () => {
      const decodedTitle = decodeURIComponent(title);
      if (decodedTitle) {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${omdbKey}&t=${decodedTitle}`,
        );
        setModalFetch(response.data);
      }
    };
    fetchModal();
  }, [title]);

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
      </ul>
    </div>
  );
};

export default Modal;

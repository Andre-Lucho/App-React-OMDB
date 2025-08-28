import { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { useEffect } from 'react';

const Modal = () => {
  const [modalData, setModalData] = useState(null);

  const context = useContext(GlobalContext);
  const { movieData, omdbKey, fetchData } = context;

  const handleModal = async (e) => {
    if (movieData) {
      // Verifica se e é um evento real antes de chamar preventDefault
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
      }
      await request(
        `http://www.omdbapi.com/?apikey=${omdbKey}&t=${movieData.Title}`,
      );
    }
  };

  return (
    <div className="modal-container">
      {/* <ul className="galery-container">
        {movieData &&
          movieData.map((movie, i) => (
            <li key={i} className="img-container">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-imagem"
              />
              <figcaption className="img-legenda">
                <span>{movie.Title}</span>
                <p>{movie.Year}</p>
                <button>More Info</button>
              </figcaption>
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default Modal;

// olhar projeto felinos selvagens e ver correspondencias efeitos - arrays

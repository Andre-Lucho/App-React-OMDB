import { useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useParams } from 'react-router-dom';
import Modal from '../Modal';

import Loading from '../../assets/Loading/Loading';
import '../../styles/modal.scss';

const ModalContainer = () => {
  // Contexto global
  const { request, fetchData, omdbKey, loading, error } =
    useContext(GlobalContext);

  // React-router
  const { title } = useParams();

  useEffect(() => {
    const fetchModal = async (url) => {
      if (title) {
        await request(url);
      }
    };
    fetchModal(`http://www.omdbapi.com/?apikey=${omdbKey}&t=${title}`);
  }, [title, omdbKey]);

  if (!omdbKey) {
    return (
      <div className="no-omdb-input-container">
        <p>Você precisa de uma chave OMDB para a realizar a busca!</p>
      </div>
    );
  }
  if (!title) {
    return (
      <div className="no-omdb-input-container">
        <p>Por favor, digite um termo para a busca!</p>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    <p>{error}</p>;
  }

  return (
    <div className="modal-container">
      <Modal fetchData={fetchData} />;
    </div>
  );
};

export default ModalContainer;

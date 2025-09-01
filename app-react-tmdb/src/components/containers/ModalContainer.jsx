import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../Modal';
import MyFavorites from '../MyFavorites';

const ModalContainer = () => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { omdbKey } = context;

  // React-router
  const { title } = useParams();

  const [modalFetch, setModalFetch] = useState(null);

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
  }, [title, omdbKey]);

  return (
    <div>
      <Modal modalFetch={modalFetch} />
    </div>
  );
};

export default ModalContainer;

import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '../Modal';
import MyFavorites from '../MyFavorites';

const ModalContainer = () => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { omdbKey, setFavMovie } = context;

  // React-router
  const { title } = useParams();
  const navigate = useNavigate();

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
  }, [title]);

  return (
    <div>
      <Modal />
      <MyFavorites />
    </div>
  );
};

export default ModalContainer;

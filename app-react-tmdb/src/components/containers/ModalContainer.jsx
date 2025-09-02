import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useParams } from 'react-router-dom';
import Modal from '../Modal';

const ModalContainer = () => {
  // Contexto global
  const context = useContext(GlobalContext);
  const { request, fetchData, omdbKey } = context;

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

  return (
    <div>
      <Modal fetchData={fetchData} />
    </div>
  );
};

export default ModalContainer;

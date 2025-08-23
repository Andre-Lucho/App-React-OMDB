import { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Modal = () => {
  const [modalData, setModalData] = useState(null);

  const context = useContext(GlobalContext);
  const { movieData } = context;

  return <div></div>;
};

export default Modal;

// olhar projeto felinos selvagens e ver correspondencias efeitos - arrays

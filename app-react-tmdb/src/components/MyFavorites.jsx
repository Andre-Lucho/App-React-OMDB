import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const MyFavorites = () => {
  const context = useContext(GlobalContext);
  const { favMovie, setFavMovie } = context;

  return <div>MyFavorites</div>;
};

export default MyFavorites;

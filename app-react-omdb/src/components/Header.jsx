import Form from './Form';
import MyFavorites from './MyFavorites';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

const Header = () => {
  return (
    <div id="home" className="header-container">
      <Link to={'/'}>
        <div className="logo">
          <li>APP OMDB</li>
        </div>
      </Link>
      <nav className="nav-container">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
      </nav>
      <Form />
      <Link to={'favorites'} className="fav-container">
        <li>Favoritos</li>
      </Link>
    </div>
  );
};

export default Header;

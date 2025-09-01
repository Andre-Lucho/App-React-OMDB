import { Link } from 'react-router-dom';
import Form from './Form';
import MyFavorites from './MyFavorites';

const Header = () => {
  return (
    <div className="header-container" id="home">
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
      <Link to={'favorites'}>
        <li>Favoritos</li>
      </Link>
    </div>
  );
};

export default Header;

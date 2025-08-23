import Form from './Form';

const Header = () => {
  return (
    <div className="header-container" id="home">
      <div className="logo">
        <h2>
          <a href="#home">APP OMDB</a>
        </h2>
      </div>
      <nav className="nav-container">
        <li>
          <a href="#home">Home</a>
        </li>
      </nav>
      <Form />
    </div>
  );
};

export default Header;

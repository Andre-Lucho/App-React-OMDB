import Form from './Form';

const Header = () => {
  return (
    <div className="header-container" id="home">
      <div className="logo">
        <h2>
          <a href="#home">APP OMDB</a>
        </h2>
      </div>
      <nav>
        <ul className="nav-container">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
        <Form />
      </nav>
    </div>
  );
};

export default Header;

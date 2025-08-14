import { useState, useRef } from 'react';

const Header = ({ onSearch }) => {
  const [userInput, setUserInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      onSearch(userInput);
    }
  };

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
            {' '}
            <a href="#home">Home</a>
          </li>
          <li>
            {' '}
            <a href="#home">Home</a>
          </li>
        </ul>
      </nav>
      <form className="search-container" onSubmit={handleSearch}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={userInput}
          onChange={({ target }) => setUserInput(target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Go!</button>
      </form>
    </div>
  );
};

export default Header;

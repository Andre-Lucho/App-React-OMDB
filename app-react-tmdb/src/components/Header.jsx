import { useState, useRef } from 'react';

const Header = ({ ref }) => {
  return (
    <div className="header-container" id="home">
      <div className="logo">
        <a href="#home">APP TMDB</a>
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
      <div className="search-container">
        <label htmlFor="search">Search</label>
        <input type="text" id="search" ref={ref} />
      </div>
    </div>
  );
};

export default Header;

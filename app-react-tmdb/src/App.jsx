import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  const [userInput, setUserInput] = useState(null);
  const [load, setLoad] = useState(true);
  const query = useRef();

  return (
    <main className="main-container">
      <section className="header-container">
        <Header ref={query} />
        <button
          onClick={() => setUserInput(query.current.value)}
          className="search-button"
        >
          Go!
        </button>
      </section>
      <Dashboard userInput={userInput} />
      <Footer />
    </main>
  );
}

export default App;

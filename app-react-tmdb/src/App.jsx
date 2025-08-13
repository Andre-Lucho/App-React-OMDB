import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  const [userInput, setUserInput] = useState(null);
  const [load, setLoad] = useState(true);
  const query = useRef();

  return (
    <div className="main-container">
      <Header ref={query} />
      <button onClick={() => setUserInput(query.current.value)}></button>
      <Dashboard userInput={userInput} />
      <Footer />
    </div>
  );
}

export default App;

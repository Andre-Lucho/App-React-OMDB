import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  const [userData, setUserData] = useState(null);
  const [load, setLoad] = useState(true);

  const handleSearch = (query) => setUserData(query);

  return (
    <main className="main-container">
      <Header onSearch={handleSearch} />
      <Dashboard userData={userData} />
      <Footer />
    </main>
  );
}

export default App;

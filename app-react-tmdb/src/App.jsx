import { useContext } from 'react';
import { GlobalStorage } from './components/GlobalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <GlobalStorage>
      <main className="main-container">
        <Header />
        <Dashboard />
        <Footer />
      </main>
    </GlobalStorage>
  );
}

export default App;

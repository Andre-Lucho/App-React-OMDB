import { GlobalStorage } from './components/GlobalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Modal from './components/Modal';

function App() {
  return (
    <GlobalStorage>
      <main className="main-container">
        <Header />
        <Dashboard />
        {/* <Modal /> */}
        <Footer />
      </main>
    </GlobalStorage>
  );
}

export default App;

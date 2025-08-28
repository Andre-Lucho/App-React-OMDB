import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './components/GlobalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Modal from './components/Modal';

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <Routes>
            {/* <Head title="Home" description="home" /> */}
            <Route path="/" element={<Header />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="modal/:title" element={<Modal />} />
            {/* <Route path="favoritos" element={<Favoritos />} /> */}
          </Routes>
          <Footer />
        </GlobalStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;

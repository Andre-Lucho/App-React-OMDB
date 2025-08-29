import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './components/GlobalContext';
import Header from './components/Header';
import Modal from './components/Modal';
import MyFavorites from './components/MyFavorites';
import MovieContainer from './components/MovieContainer';

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <Routes>
            {/* <Head title="Home" description="home" /> */}
            <Route path="/" element={<Header />} />
            <Route path="movieConteainer" element={<MovieContainer />} />
            <Route path="modal/:title" element={<Modal />} />
            <Route path="favorites/:title" element={<MyFavorites />} />
          </Routes>
        </GlobalStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './components/GlobalContext';
import Header from './components/Header';
import DashContainer from './components/containers/DashContainer';
import ModalContainer from './components/containers/ModalContainer';
import MyFavorites from './components/MyFavorites';
import NotFound from './components/NotFound';

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <Routes className="routes-container">
            {/* <Head title="Home" description="home" /> */}
            <Route path="/" element={<Header />} />
            <Route path="dashContainer/" element={<DashContainer />} />
            <Route path="modalContainer/:title" element={<ModalContainer />} />
            <Route path="favorites" element={<MyFavorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;

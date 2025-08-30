import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './components/GlobalContext';
import Header from './components/Header';
import DashContainer from './components/containers/DashContainer';
import ModalContainer from './components/containers/ModalContainer';

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <Routes>
            {/* <Head title="Home" description="home" /> */}
            <Route path="/" element={<Header />} />
            <Route path="dashContainer" element={<DashContainer />} />
            <Route path="modalContainer" element={<ModalContainer />} />
            <Route path="/modal/:title" element={<Modal />} />
            <Route path="favorites" element={<MyFavorites />} />
          </Routes>
        </GlobalStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;

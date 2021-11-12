import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { FullPost } from './components/FullPost';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="App clear">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<FullPost />} />
      </Routes>
    </div>
  );
}

export default App;

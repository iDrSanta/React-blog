import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { FullPost } from './components/FullPost';
import { MainPage } from './pages/MainPage/index';

function App() {
  return (
    <div className="App clear">
      <Header />
      <Routes>
        <Route path="/React-blog/" element={<MainPage />} exact />
        <Route path="/React-blog/post/:id" element={<FullPost />} />
      </Routes>
    </div>
  );
}

export default App;

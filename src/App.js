import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { FullArticle } from './components/FullArticle';
import { MainPage } from './pages/MainPage/index';
import { CommentsMainPage } from './components/CommentsMainPage/index';

function App() {
  return (
    <div className="App clear">
      <Header />
      <CommentsMainPage />
      <Routes>
        <Route path="/React-blog/" element={<MainPage />} exact />
        <Route path="/React-blog/post/:id" element={<FullArticle />} />
      </Routes>
    </div>
  );
}

export default App;

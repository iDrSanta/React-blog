import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

import './CreateArticalModal.scss';
import { addArticle } from '../../redux/actions/articles';

export const CreateArticalModal = ({ toggleVisibleModal }) => {
  const dispatch = useDispatch();
  const [article, setArticle] = React.useState({
    title: '',
    subTitle: '',
    image: '',
    text: '',
  });

  const changeInput = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSendArticle = () => {
    dispatch(addArticle(article));
    toggleVisibleModal();
  };

  return (
    <div onClick={toggleVisibleModal} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modalContent">
        <CloseIcon onClick={toggleVisibleModal} sx={{ color: 'rgb(158, 158, 158)' }} />
        <h2>Заголовок</h2>
        <input
          onChange={changeInput}
          value={article.title}
          className="inputModla"
          type="text"
          name="title"
          placeholder="Введите заголовок..."
        />
        <h3>Подзаголовок</h3>
        <input
          onChange={changeInput}
          value={article.subTitle}
          className="inputModla"
          type="text"
          name="subTitle"
          placeholder="Введите позаголовок..."
        />
        <h3>Картинка</h3>
        <input
          onChange={changeInput}
          value={article.image}
          className="inputModla"
          type="text"
          name="image"
          placeholder="Введите URL..."
        />
        <h3>Текст статьи</h3>
        <input
          onChange={changeInput}
          value={article.text}
          className="inputModla"
          type="text"
          name="text"
          placeholder="Введите текст..."
        />
        <button onClick={onSendArticle}>Отправить</button>
      </div>
    </div>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './CreateArticalForm.module.scss';
import { publishArticle } from '../../redux/actions/articles';

export const CreateArticalForm = ({ toggleVisibleModal }) => {
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

  const onpuBlishArticle = () => {
    dispatch(publishArticle(article));
    toggleVisibleModal();
  };

  return (
    <div className={styles.articalFormWrapper}>
      <div className={styles.articalForm}>
        <h2>Заголовок</h2>
        <input
          className={styles.inputForm}
          onChange={changeInput}
          value={article.title}
          type="text"
          name="title"
          placeholder="Введите заголовок..."
        />
        <h3>Подзаголовок</h3>
        <input
          className={styles.inputForm}
          onChange={changeInput}
          value={article.subTitle}
          type="text"
          name="subTitle"
          placeholder="Введите позаголовок..."
        />
        <h3>Изображение</h3>
        <input
          className={styles.inputForm}
          onChange={changeInput}
          value={article.image}
          type="text"
          name="image"
          placeholder="Введите URL..."
        />
        <h3>Текст статьи</h3>
        <textarea
          className={styles.inputForm}
          onChange={changeInput}
          value={article.text}
          type="text"
          name="text"
          placeholder="Введите текст..."
        />
      </div>
      <button onClick={onpuBlishArticle}>Опубликовать</button>
    </div>
  );
};

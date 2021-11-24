import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchRemoveArticle } from '../../redux/actions/articles';
import styles from './Post.module.scss';

export const Post = ({ id, title, subTitle, image }) => {
  const dispatch = useDispatch();
  const onRemoveArticle = (id) => {
    console.log(id);
    dispatch(fetchRemoveArticle(id));
  };
  return (
    <div className={styles.postWrapper}>
      <Link to={`post/${id}`}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </Link>
      <div className={styles.subTitle}>
        <h3>{subTitle}</h3>
      </div>
      <img src={image} alt="postImg" />
      <div className={styles.buttonBox}>
        <Link to={`post/${id}`}>
          <button>Читать полностью</button>
        </Link>
        <button
          onClick={() => onRemoveArticle(id)}
          style={{ background: '#FFF4E2', border: '1px solid #fdeacb' }}>
          Удалить
        </button>
      </div>
    </div>
  );
};

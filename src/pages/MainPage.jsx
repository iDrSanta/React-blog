import React from 'react';
import { useSelector } from 'react-redux';

import { CommentsMainPage } from '../components/CommentsMainPage';
import styles from './MainPage.module.scss';
import { Post } from '../components/Post';

export const MainPage = () => {
  const articles = useSelector(({ articles }) => articles.items);
  return (
    <div className={styles.mainPageWrapper}>
      <div className="left__box"></div>
      <div className={styles.articles}>
        {articles.map((obj) => (
          <Post key={obj.id} {...obj} />
        ))}
      </div>
      <CommentsMainPage />
    </div>
  );
};

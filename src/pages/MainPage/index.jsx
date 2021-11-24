import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CommentsMainPage } from '../../components/CommentsMainPage/index';
import styles from './MainPage.module.scss';
import { Post } from '../../components/Post';
import { fetchArticle } from '../../redux/actions/articles';

export const MainPage = () => {
  const articles = useSelector(({ articles }) => articles.items);
  const items = articles;
  console.log(items);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchArticle());
  }, []);
  return (
    <div className={styles.mainPageWrapper}>
      <div className="left__box"></div>
      <div className={styles.articles}>
        {items.reverse().map((obj) => (
          <Post key={obj.id} {...obj} />
        ))}
      </div>
      <CommentsMainPage />
    </div>
  );
};

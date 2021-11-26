import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';

import styles from './MainPage.module.scss';
import { Post } from '../../components/Post';
import { fetchArticle, setIsLoaded } from '../../redux/actions/articles';

export const MainPage = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  const { items, isLoaded } = useSelector(({ articles }) => articles);
  const q = true;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  return (
    <div className={styles.mainPageWrapper}>
      <div className="left__box"></div>
      <div className={styles.articles}>
        {!isLoaded
          ? items.reverse().map((obj) => <Post key={obj.id} {...obj} />)
          : arr.map(() => (
              <ContentLoader
                className={styles.skelet}
                speed={1}
                width={700}
                height={700}
                viewBox="0 0 700 700"
                backgroundColor="#ffffff"
                foregroundColor="#ecebeb">
                <rect x="131" y="406" rx="0" ry="0" width="11" height="0" />
                <rect x="0" y="20" rx="8" ry="8" width="640" height="660" />
              </ContentLoader>
            ))}
      </div>
    </div>
  );
};

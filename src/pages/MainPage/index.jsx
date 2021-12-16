import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';

import styles from './MainPage.module.scss';
import { Post } from '../../components/Post';
import { fetchArticle } from '../../redux/actions/articles';

export const MainPage = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  const { items, isLoaded, search } = useSelector(({ articles }) => articles);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  React.useEffect(() => {}, [search]);

  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.articles}>
        {!isLoaded
          ? items
              .filter((obj) =>
                (obj.title.toLowerCase() + obj.subTitle.toLowerCase()).includes(
                  search.toLowerCase(),
                ),
              )
              .map((obj) => <Post key={obj.id} {...obj} />)
          : arr.map((_, i) => (
              <ContentLoader
                className={styles.skelet}
                speed={1}
                key={i}
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

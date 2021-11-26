import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';

import { Comments } from '../Comments/index';
import styles from './FullArticle.module.scss';
import { fetchComments } from '../../redux/actions/comments';
import { fetchFullArticle } from '../../redux/actions/fullArticle';

export const FullArticle = () => {
  const { id } = useParams();
  const { fullArticle, isLoaded } = useSelector((state) => state.fullArticle);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFullArticle(id));
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div>
          <div className={styles.articleWrapper}>
            <div className="container">
              <div className={styles.title}>
                <h1>{fullArticle.title}</h1>
              </div>
              <div className={styles.subTitle}>
                <h4>{fullArticle.subTitle}</h4>
              </div>
            </div>
            <img src={fullArticle.image} alt="postImg" />
            <div className="container">
              <div className={styles.text}>{fullArticle.text}</div>
              <div className={styles.buttonBox}>
                <Link to="/React-blog/">
                  <button>На главную</button>
                </Link>
              </div>
            </div>
          </div>
          <Comments comments={fullArticle.comments} />
        </div>
      ) : (
        <ContentLoader
          className={styles.skelet}
          speed={1}
          width={1300}
          height={1500}
          viewBox="0 0 1300 1500"
          backgroundColor="#ffffff"
          foregroundColor="#ecebeb">
          <rect x="131" y="406" rx="0" ry="0" width="11" height="0" />
          <rect x="0" y="0" rx="8" ry="8" width="1020" height="1340" />
        </ContentLoader>
      )}
    </>
  );
};

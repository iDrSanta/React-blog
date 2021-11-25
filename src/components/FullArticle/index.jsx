import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Comments } from '../Comments/index';
import styles from './FullArticle.module.scss';
import { fetchComments } from '../../redux/actions/comments';
import { fetchFullArticle } from '../../redux/actions/fullArticle';

export const FullArticle = () => {
  const { id } = useParams();
  const { fullArticle } = useSelector((state) => state.fullArticle);
  console.log(fullArticle);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFullArticle(id));
  }, []);

  return (
    <>
      {fullArticle ? (
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
          {/* <Comments comments={comments} /> */}
        </div>
      ) : (
        404
      )}
    </>
  );
};

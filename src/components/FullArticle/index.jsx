import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Comments } from '../Comments/index';
import styles from './FullArticle.module.scss';
import { fetchComments } from '../../redux/actions/comments';

export const FullArticle = () => {
  const { id } = useParams();
  const article = useSelector(({ articles }) =>
    articles.items.find((obj) => obj.id === Number(id)),
  );
  const comments = useSelector(({ comments }) => comments.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <>
      {article ? (
        <div>
          <div className={styles.articleWrapper}>
            <div className="container">
              <div className={styles.title}>
                <h1>{article.title}</h1>
              </div>
              <div className={styles.subTitle}>
                <h4>{article.subTitle}</h4>
              </div>
            </div>
            <img src={article.image} alt="postImg" />
            <div className="container">
              <div className={styles.text}>{article.text}</div>
              <div className={styles.buttonBox}>
                <Link to="/React-blog/">
                  <button>На главную</button>
                </Link>
              </div>
            </div>
          </div>
          <Comments comments={comments} />
        </div>
      ) : (
        404
      )}
    </>
  );
};

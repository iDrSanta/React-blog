import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Comments } from '../Comments/index';
import styles from './FullPost.module.scss';
import { fetchComments } from '../../redux/actions/comments';

export const FullPost = ({}) => {
  const { id } = useParams();
  const post = useSelector(({ articles }) => articles.items.find((obj) => obj.id === Number(id)));
  const comments = useSelector(({ comments }) => comments.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <div className={styles.postWrapper}>
        <div className="container">
          <div className={styles.title}>
            <h1>{post.title}</h1>
          </div>
          <div className={styles.subTitle}>
            <h4>{post.subTitle}</h4>
          </div>
        </div>
        <img src={post.image} alt="postImg" />
        <div className="container">
          <div className={styles.text}>{post.text}</div>
          <div className={styles.buttonBox}>
            <Link to="/React-blog/">
              <button>На главную</button>
            </Link>
          </div>
        </div>
      </div>
      <Comments comments={comments} />
    </>
  );
};

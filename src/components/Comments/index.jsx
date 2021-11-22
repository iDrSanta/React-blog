import React from 'react';

import styles from './Comments.module.scss';
import { Comment } from '../Comment/index';

export const Comments = ({ comments }) => {
  return (
    <div className={styles.commentsWrapper}>
      <div className={styles.commentsTopBox}>
        <div className="container">
          <h3 className={styles.commentsCounter}>{comments.length} комментариев</h3>
          <button className={styles.active}>Популярные</button>
          <button>По порядку</button>
        </div>
      </div>
      <div className="container">
        <input className={styles.commentInput} type="text" placeholder="Написать комментарий..." />
      </div>
      {comments.map((obj) => (
        <Comment key={obj.id} {...obj} />
      ))}
    </div>
  );
};

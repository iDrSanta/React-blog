import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import styles from './Comments.module.scss';
import { Comment } from '../Comment/index';
import { fetchSendComment } from '../../redux/actions/comments';

export const Comments = ({ comments = [], article }) => {
  const [commentValue, setCommentValue] = React.useState('');
  const dispatch = useDispatch();

  const handleCommentValue = (e) => {
    setCommentValue(e.target.value);
  };

  const sendComment = () => {
    dispatch(
      fetchSendComment(article, {
        name: 'noName',
        text: commentValue,
        date: new Date(),
      }),
    );
  };

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
        <input
          value={commentValue}
          onChange={handleCommentValue}
          className={styles.commentInput}
          type="text"
          placeholder="Написать комментарий..."
        />
        <button
          onClick={() => sendComment()}
          className={classNames(styles.commentButton, { [styles.buttonActive]: commentValue })}
          disabled={!commentValue}>
          Отправить
        </button>
      </div>
      {comments.map((obj) => (
        <Comment
          key={obj.id}
          id={obj.id}
          name={obj.name}
          text={obj.text}
          articleId={obj.articleId}
        />
      ))}
    </div>
  );
};

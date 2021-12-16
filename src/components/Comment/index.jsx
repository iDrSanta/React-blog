import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';

import styles from './Comment.module.scss';
import { fetchRemoveComments } from '../../redux/actions/comments';

export const Comment = ({ articleId, id, name, text }) => {
  const dispatch = useDispatch();

  const onRemoveComment = (article, id) => {
    dispatch(fetchRemoveComments(article, id));
  };

  return (
    <div className="container">
      <div className={styles.comment}>
        <div className={styles.commetnInfo}>
          <AccountCircleIcon sx={{ color: 'rgb(158, 158, 158)' }} />
          <div className="commentUserInfo">
            <div className={styles.commentNikname}>{name}</div>
            <div className={styles.commentDate}>3 часа</div>
          </div>
        </div>
        <div className={styles.commentText}>{text}</div>
        <button className={styles.removeBtn} onClick={() => onRemoveComment(articleId, id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

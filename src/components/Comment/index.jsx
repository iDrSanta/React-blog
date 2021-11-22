import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';

import styles from './Comment.module.scss';
import { fetchRemoveComments, removeComment } from '../../redux/actions/comments';

export const Comment = ({ id, userName, text }) => {
  const dispatch = useDispatch();
  const onRemoveComment = (id) => {
    dispatch(fetchRemoveComments(id));
    console.log(id);
  };
  return (
    <div className="container">
      <div className={styles.comment}>
        <div className={styles.commetnInfo}>
          <AccountCircleIcon sx={{ color: 'rgb(158, 158, 158)' }} />
          <div className="commentUserInfo">
            <div className={styles.commentNikname}>{userName}</div>
            <div className={styles.commentDate}>3 часа</div>
          </div>
        </div>
        <div className={styles.commentText}>{text}</div>
        <button className={styles.removeBtn} onClick={() => onRemoveComment(id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

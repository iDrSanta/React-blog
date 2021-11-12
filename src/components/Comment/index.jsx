import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from './Comment.module.scss';

export const Comment = () => {
  return (
    <div className="container">
      <div className={styles.comment}>
        <div className={styles.commetnInfo}>
          <AccountCircleIcon sx={{ color: 'rgb(158, 158, 158)' }} />
          <div className="commentUserInfo">
            <div className={styles.commentNikname}>Федя Прозоров</div>
            <div className={styles.commentDate}>3 часа</div>
          </div>
        </div>
        <div className={styles.commentText}>Пусть Макс отлижет Алисе или Марусе</div>
      </div>
    </div>
  );
};

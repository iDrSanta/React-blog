import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import styles from './CommentsMainPage.module.scss';
import classNames from 'classnames';

export const CommentsMainPage = () => {
  const [visibleComments, setVisibleComments] = React.useState(true);

  const onVisibleComments = () => {
    setVisibleComments(!visibleComments);
  };

  return (
    <div onClick={onVisibleComments} className={styles.commentsWrapper}>
      <div
        className={classNames(styles.title, {
          hide: !visibleComments,
        })}>
        Комментарии
        <KeyboardArrowRightIcon />
      </div>
      {visibleComments && <div className={styles.commentsBlock}>123</div>}
    </div>
  );
};

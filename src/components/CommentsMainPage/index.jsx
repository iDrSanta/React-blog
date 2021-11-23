import React from 'react';
import { KeyboardArrowRight, KeyboardArrowUp } from '@mui/icons-material';

import styles from './CommentsMainPage.module.scss';
import classNames from 'classnames';

export const CommentsMainPage = () => {
  const [visibleComments, setVisibleComments] = React.useState(true);

  const onVisibleComments = () => {
    setVisibleComments(!visibleComments);
  };

  return (
    <div className={styles.commentsWrapper}>
      <div onClick={onVisibleComments} className={!visibleComments ? styles.hide : styles.show}>
        <span>Комментарии</span>
        {visibleComments ? (
          <KeyboardArrowRight className={styles.svgArrow} />
        ) : (
          <KeyboardArrowUp className={styles.svgArrow} />
        )}
      </div>
      {visibleComments && <div className={styles.commentsBlock}></div>}
    </div>
  );
};

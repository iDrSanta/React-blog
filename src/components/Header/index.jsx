import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { CreateArticalForm } from '../CreateArticalForm/index';
import { ModalWindow } from '../ModalWindow/index';

export const Header = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const toggleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <Link to="/">
            <div className={styles.logo}>RB</div>
          </Link>
          <div className={styles.searchBox}>
            <SearchIcon sx={{ color: 'rgb(122, 122, 122)' }} />
            <input className={styles.inputSearch} type="text" placeholder="Поиск" />
          </div>
          <button onClick={toggleVisibleModal} className={styles.newEntry}>
            Новая запись
          </button>
        </header>
      </div>

      {visibleModal && (
        // <CreateArticalModal visibleModal={visibleModal} toggleVisibleModal={toggleVisibleModal} />
        <ModalWindow
          visibleModal={visibleModal}
          toggleVisibleModal={toggleVisibleModal}
          children={<CreateArticalForm toggleVisibleModal={toggleVisibleModal} />}
        />
      )}
    </>
  );
};

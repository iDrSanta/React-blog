import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { SortPanel } from '../SortPanel/index';
import styles from './Header.module.scss';
import { CreateArticalForm } from '../CreateArticalForm/index';
import { ModalWindow } from '../ModalWindow/index';
import { setSearch } from '../../redux/actions/articles';
import { CommentsMainPage } from '../CommentsMainPage';

export const Header = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [visibleSortPanel, setVisibleSortPanel] = React.useState(true);
  const dispatch = useDispatch();

  const toggleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const onSetSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const onVisibleSortPanel = () => {
    setVisibleSortPanel(!visibleSortPanel);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <MenuIcon className={styles.burgerMenu} onClick={onVisibleSortPanel} />
          <Link to="/">
            <div className={styles.logo}>RB</div>
          </Link>
          <div className={styles.searchBox}>
            <SearchIcon sx={{ color: 'rgb(122, 122, 122)' }} />
            <input
              onChange={onSetSearch}
              className={styles.inputSearch}
              type="text"
              placeholder="Поиск"
            />
          </div>
          <button onClick={toggleVisibleModal} className={styles.newEntry}>
            Новая запись
          </button>
        </header>
        <div className={styles.sortPanel}>
          {visibleSortPanel && <SortPanel />}
          <CommentsMainPage />
        </div>
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

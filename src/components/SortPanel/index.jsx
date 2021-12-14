import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './SortPanel.module.scss';
import category1 from '../../assets/icons/1.webp';
import category2 from '../../assets/icons/2.webp';
import category3 from '../../assets/icons/3.webp';
import category4 from '../../assets/icons/4.webp';
import category5 from '../../assets/icons/5.webp';
import classNames from 'classnames';
import { fetchArticlesByCategory, fetchArticle } from '../../redux/actions/articles';

const categoryArr = [
  { id: 1, title: 'Интернет', icon: category1 },
  { id: 2, title: 'Технологии', icon: category2 },
  { id: 3, title: 'Вопросы', icon: category3 },
  { id: 4, title: 'Путешествия', icon: category4 },
  { id: 5, title: 'Новости', icon: category5 },
];

export const SortPanel = () => {
  const [activeCategory, setActiveCategory] = React.useState(null);
  const dispatch = useDispatch();

  const onSetActiveCategory = (id) => {
    if (id === activeCategory) {
      setActiveCategory(null);
      dispatch(fetchArticle());
    } else {
      setActiveCategory(id);
      dispatch(fetchArticlesByCategory(id));
    }
  };

  return (
    <div className={styles.sortPanelWrapper}>
      <ul>
        {categoryArr.map((obj) => (
          <li
            key={obj.id}
            onClick={() => onSetActiveCategory(obj.id)}
            className={classNames({ [styles.active]: obj.id === activeCategory })}>
            <img src={obj.icon} alt="categoryIcon" />
            {obj.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './CreateArticalForm.module.scss';
import { publishArticle } from '../../redux/actions/articles';

import category1 from '../../assets/icons/1.webp';
import category2 from '../../assets/icons/2.webp';
import category3 from '../../assets/icons/3.webp';
import category4 from '../../assets/icons/4.webp';
import category5 from '../../assets/icons/5.webp';
import classNames from 'classnames';

const schema = yup.object({
  title: yup.string().min(3, 'Минимум 3 символа'),
  image: yup.string().url('Введите корректный URL').required('Это обязательное поле'),
  text: yup.string().min(3, 'Минимум 3 символа'),
});
const categoryArr = [
  { id: 1, title: 'Интернет', icon: category1, active: false },
  { id: 2, title: 'Технологии', icon: category2, active: false },
  { id: 3, title: 'Вопросы', icon: category3, active: false },
  { id: 4, title: 'Путешествия', icon: category4, active: false },
  { id: 5, title: 'Новости', icon: category5, active: false },
];

export const CreateArticalForm = ({ toggleVisibleModal }) => {
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema) });
  const { errors } = formState;

  const dispatch = useDispatch();

  const onSubmit = (value) => {
    value.category = activeCategory;
    dispatch(publishArticle(value));
    console.log(value);
    toggleVisibleModal();
  };

  const [activeCategory, setActiveCategory] = React.useState(1);

  const onSetActiveCategory = (id) => {
    setActiveCategory(id);
    console.log(activeCategory);
  };

  return (
    <div className={styles.articalFormWrapper}>
      <div className="">
        <div className={styles.sortPanelWrapper}>
          <ul className={styles.categoryList}>
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
      </div>
      <div className={styles.articalForm}>
        <div className={styles.inputWrapper}>
          <h2>Заголовок</h2>
          <input
            className={styles.inputForm}
            type="text"
            name="title"
            {...register('title')}
            placeholder="Введите заголовок..."
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <h3>Подзаголовок</h3>
        <input
          className={styles.inputForm}
          type="text"
          name="subTitle"
          {...register('subTitle')}
          placeholder="Введите позаголовок..."
        />
        <div className={styles.inputWrapper}>
          <h3>Изображение</h3>
          <input
            className={styles.inputForm}
            type="text"
            name="image"
            {...register('image')}
            placeholder="Введите URL..."
          />
          {errors.image && <p>{errors.image.message}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <h3>Текст статьи</h3>
          <textarea
            className={styles.inputForm}
            type="text"
            name="text"
            {...register('text')}
            placeholder="Введите текст..."
          />
          {errors.text && <p>{errors.text.message}</p>}
        </div>
      </div>
      <button onClick={handleSubmit(onSubmit)}>Опубликовать</button>
    </div>
  );
};

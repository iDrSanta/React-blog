import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import styles from './CreateArticalForm.module.scss';
import { publishArticle } from '../../redux/actions/articles';

const schema = yup.object({
  title: yup.string().min(3, 'Минимум 3 символа'),
  image: yup.string().url('Введите корректный URL').required('Это обязательное поле'),
  text: yup.string().min(3, 'Минимум 3 символа'),
});

export const CreateArticalForm = ({ toggleVisibleModal }) => {
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema) });
  const { errors } = formState;
  console.log(errors);

  const dispatch = useDispatch();

  const onSubmit = (value) => {
    console.log(value);
    dispatch(publishArticle(value));
    toggleVisibleModal();
  };

  return (
    <div className={styles.articalFormWrapper}>
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

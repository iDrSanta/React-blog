import React from 'react';
import { useSelector } from 'react-redux';

import { Post } from '../components/Post';

export const MainPage = () => {
  const articles = useSelector(({ articles }) => articles.items);
  return (
    <div>
      {articles.map((obj) => (
        <Post key={obj.id} {...obj} />
      ))}
    </div>
  );
};

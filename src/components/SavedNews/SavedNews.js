import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import cards from '../../config/cards';

function SavedNews() {
  return (
    <NewsCardList cards={cards} />
  );
}

export default SavedNews;

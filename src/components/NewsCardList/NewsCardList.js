import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__list">
        <NewsCard />
      </ul>
      <button className="news-card-list__button" type="button">Show more</button>
    </section>
  );
}

export default NewsCardList;

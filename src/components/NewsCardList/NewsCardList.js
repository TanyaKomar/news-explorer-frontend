import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards }) {
  // console.log(cards, NewsCard);
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__list">
       {cards && cards.map((card) => <NewsCard card={card}/>)}
      </ul>
      <button className="news-card-list__button" type="button">Show more</button>
    </section>
  );
}

export default NewsCardList;

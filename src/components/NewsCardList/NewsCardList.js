import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, isHome }) {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__list">
       {cards && cards.map((card) => <NewsCard card={card} key={JSON.stringify(card)} isHome={isHome}/>)}
      </ul>
      <button className="news-card-list__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default NewsCardList;

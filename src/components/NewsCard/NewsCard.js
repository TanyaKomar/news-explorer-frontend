import React from 'react';
import './NewsCard.css';
import cards from '../../config/cards';

function NewsCard() {
  return (
    cards.map((card) => (
      <li className="news-card">
        <img className="news-card__image" src={card.image} alt={card.title}></img>
        <button className="news-card__bookmark" type="button"></button>
        <div className="news-card__description">
          <p className="news-card__date">{card.date}</p>
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__text">{card.text}</p>
          <p className="news-card__source">{card.source}</p>
        </div>
      </li>
    ))
  );
}

export default NewsCard;

import React from 'react';
import './NewsCard.css';

function NewsCard({ card, isHome }) {
  const [isSaved, setIsSaved] = React.useState(false);
  
  return (
      <li className="news-card">
        <img className="news-card__image" src={card.image} alt={card.title}></img>
        {isHome
          ? (
        <button className={`news-card__bookmark${isSaved ? " news-card__bookmark_marked" : ""}`} type="button" onClick={() => {setIsSaved(true)}}>
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" stroke="#B6BCBF" strokeWidth="2"/>
          </svg>
          <span className="news-card__tooltip">Sign in to save articles</span>
        </button>)
          :
        (<>
        <p className="news-card__keyword">{card.keyword[0].toUpperCase() + card.keyword.slice(1)}</p>
        <button className="news-card__trash" type="button">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0H6V2H0V4H18V2H12V0ZM2 6V17C2 18.1046 2.89543 19 4 19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 6L6 15H8L8 6H6ZM10 6V15H12V6H10Z" fill="#B6BCBF"/>
          </svg>
          <span className="news-card__tooltip">Remove from saved</span>
        </button> </>)}
        <div className="news-card__description">
          <p className="news-card__date">{card.date}</p>
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__text">{card.text}</p>
          <p className="news-card__source">{card.source}</p>
        </div>
      </li>
  );
}

export default NewsCard;

import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, isHome, searchError, isLoggedIn, keyword,refresh }) {
  const [counter, setCounter] = React.useState(3);
  const increaseCounter = () => {
    setCounter(counter + 3);
  }
  const isShowMoreButton = cards.length > 3 && counter < cards.length;

  return (
    <>
    {searchError ? <p className="news-card-list__error">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p> :
    <section className="news-card-list">
      <div className="news-card-list__container">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__list">
       {cards && cards.slice(0, counter).map((card) => <NewsCard refresh={refresh} keyword={keyword} card={card} key={JSON.stringify(card)} isHome={isHome} isLoggedIn={isLoggedIn}/>)}
      </ul>
     {isShowMoreButton &&
      <button className="news-card-list__button" type="button" onClick = {increaseCounter}>Show more</button>}
      </div>
    </section>}
    </>
  );
}

export default NewsCardList;

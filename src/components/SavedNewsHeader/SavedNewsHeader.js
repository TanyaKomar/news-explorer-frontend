import './SavedNewsHeader.css';
import '../HeaderNav/HeaderNav.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsHeader({logout}) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header className="header">
      <HeaderNav isLoggedIn={true} logout={logout}/>
      <section className="saved-news-header">
          <h2 className="saved-news-header__title">Saved articles</h2>
          <p className="saved-news-header__text">{currentUser.name}, you have 5 saved articles</p>
          <p className="saved-news-header__keyword">By keywords:&#160;<span className="saved-news-header__accent">Nature, Yellowstone, and 2 other</span>
          </p>
      </section>
    </header>
  );
}

export default SavedNewsHeader;

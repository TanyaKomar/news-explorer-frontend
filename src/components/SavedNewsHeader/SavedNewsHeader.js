import './SavedNewsHeader.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

function SavedNewsHeader() {
  return (
    <header className="header">
      <HeaderNav />
      <section className="saved-news-header">
          <h2 className="saved-news-header__title">Saved articles</h2>
          <p className="saved-news-header__text">Elise, you have 5 saved articles</p>
          <p className="saved-news-header__keyword">By keywords:&#160; 
            <span className="saved-news-header__accent">Nature, Yellowstone, and 2 other</span>
          </p>
      </section>
    </header>
  );
}

export default SavedNewsHeader;
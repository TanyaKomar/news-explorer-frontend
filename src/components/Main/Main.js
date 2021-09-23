import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';

function Main({isLoggedIn, openSignUpPopup, logout, isLoading, handleSearchSubmit, searchError, cards, keyword, notFound}) {

  return (
    <main>
      <div className="background">
        <Header isLoggedIn={isLoggedIn} logout={logout} openSignUpPopup={openSignUpPopup} />
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
      </div>
      {isLoading === 'search' && <Preloader />}
      {notFound && !searchError && <NotFound />}
      {cards.length!==0 && <NewsCardList keyword={keyword} cards={cards} isHome={true} isLoggedIn={isLoggedIn} openSignUpPopup={openSignUpPopup}/>}
      {searchError && <p className="news-card-list__error">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p>}
      <About />
    </main>
  );
}

export default Main;

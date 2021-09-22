import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import newsApi from '../../utils/NewsApi';
import SearchForm from '../SearchForm/SearchForm';

function Main({isLoggedIn, openSignUpPopup, logout}) {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSearchError(false);
    setKeyword(event.currentTarget[0].value);
    newsApi
    .getCards(event.currentTarget[0].value)
    .then(({articles}) => {
      if(articles.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
      setCards(articles);
    })
    .catch((error) => {
      setSearchError(true);
      console.error(error);
    })
    .finally(() => {setIsLoading(false)})
  }


  return (
    <main>
      <div className="background">
        <Header isLoggedIn={isLoggedIn} logout={logout} openSignUpPopup={openSignUpPopup} />
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      {isLoading && <Preloader />}
      {notFound && <NotFound />}
      {!isLoading && cards.length!==0 && <NewsCardList keyword={keyword} cards={cards} isHome={true} isLoggedIn={isLoggedIn}/>}
      {searchError && <p className="news-card-list__error">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p>}
      <About />
    </main>
  );
}

export default Main;

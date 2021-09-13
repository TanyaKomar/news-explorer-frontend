import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import newsApi from '../../utils/NewsApi';
import SearchForm from '../SearchForm/SearchForm';

function Main({isLoggedIn, openPopup}) {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSearchError(false);
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
        <Header isLoggedIn={isLoggedIn} openPopup={openPopup} />
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      {isLoading && <Preloader />}
      {notFound && <NotFound />}
      {!isLoading && cards.length!==0 && <NewsCardList searchError={searchError} cards={cards} isHome={true}/>}
      <About />
    </main>
  );
}

export default Main;

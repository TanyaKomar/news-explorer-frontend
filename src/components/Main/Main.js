import './Main.css';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import cards from '../../config/cards';

function Main() {
  return (
    <main>
      <Preloader />
      <NotFound />
      <NewsCardList cards={cards} isHome={true}/>
      <About />
    </main>
  );
}

export default Main;

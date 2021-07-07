import './Main.css';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main() {
  return (
    <main>
      <Preloader />
      <NotFound />
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;

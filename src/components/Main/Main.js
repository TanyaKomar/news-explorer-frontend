import './Main.css';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';

function Main() {
  return (
    <main>
      <SearchForm />
      <Preloader />
      <NotFound />
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;

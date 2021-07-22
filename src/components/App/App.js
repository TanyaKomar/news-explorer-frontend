import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  // const [currentUser, setCurrentUser] = React.useState({});
  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <>
      <Route exact path="/">
        <Header />
        <Main />
      </Route>
      <Route exact path="/saved-news">
        <SavedNewsHeader />
        <SavedNews />
      </Route>
      <PopupWithForm />
      <Footer />
    </>
    // </CurrentUserContext.Provider>
  );
}

export default App;

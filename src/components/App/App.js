import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Route path="/">
        <Main />
      </Route>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;

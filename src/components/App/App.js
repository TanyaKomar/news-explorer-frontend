import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('token'));
  const [isLoading, setIsLoading] = React.useState('');
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');
  const [searchError, setSearchError] = React.useState(false);
  
  let recentCards = [];
  if (localStorage.getItem('articles')!==null){
     recentCards = JSON.parse(localStorage.getItem('articles'));
  }
  let recentKeyword = "";
  if (localStorage.getItem('keyword')!==null){
    recentKeyword = localStorage.getItem('keyword');
 }
  const [keyword, setKeyword] = React.useState(recentKeyword);
  const [cards, setCards] = React.useState(recentCards);
  const [notFound, setNotFound] = React.useState(false);

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  React.useEffect(() => {
    localStorage.getItem('token') &&
  mainApi
      .getContent()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error(error);
      });
  },[isLoggedIn]);

  const closeAllPopups = () => {
    setIsSignUpPopupOpen(false);
    setIsSuccessPopupOpen(false);
    setIsSignInPopupOpen(false);
    document.removeEventListener("keydown", escapeButton);
  }
  const escapeButton = (evt) => {
    if (evt.key === "Escape") {
        closeAllPopups();
    }
  }
  const openSignUpPopup = () => {
    closeAllPopups();
    setIsSignUpPopupOpen(true);
    resetForm();
    document.addEventListener("keydown", escapeButton);
  }
  const openSignInPopup = () => {
    closeAllPopups();
    setIsSignInPopupOpen(true);
    resetForm();
    document.addEventListener("keydown", escapeButton);
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = { email: '', password: '', username: ''}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setSubmitError('');
    },
    [setValues, setErrors, setIsValid]
  );

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading('auth');
    mainApi
      .register(values.email, values.password, values.username)
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        } else {
          setIsSignUpPopupOpen(false);
          setIsSuccessPopupOpen(true);
        }
      })
      .catch((error) => setSubmitError(error.message))
      .finally(() => {
        setIsLoading('');
      })
  }

  const logout = ()=>{
    setIsLoggedIn(false);
    history.push('/');
    localStorage.removeItem('token');
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading('auth');
    mainApi
      .login(values.email, values.password)
      .then((data) => {
        resetForm();
        setIsLoggedIn(true);
        closeAllPopups();
        return data;
      })
      .catch((error) => {
        setIsLoggedIn(false);
        console.error(error);
      })
      .finally(() => setIsLoading(''));
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setIsLoading('search');
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
      localStorage.setItem('articles', JSON.stringify(articles));
      localStorage.setItem('keyword', event.target[0].value);
    })
    .catch((error) => {
      setSearchError(true);
      localStorage.removeItem('articles');
      localStorage.removeItem('keyword');
      setCards([]);
      console.error(error);
    })
    .finally(() => {setIsLoading('')})
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <Switch>
      <Route exact path="/">
        <Main isLoggedIn={isLoggedIn} logout={logout} openSignUpPopup={openSignUpPopup} isLoading={isLoading} handleSearchSubmit={handleSearchSubmit} searchError={searchError} cards={cards} keyword={keyword} notFound={notFound}/>
        {isSignUpPopupOpen && (
          <Register isSignUpPopupOpen={true} onClose={closeAllPopups} handleRegisterSubmit={handleRegisterSubmit} onReset={resetForm} handleChange={handleChange} errors={errors} submitError={submitError} isValid={isValid} openSignInPopup={openSignInPopup} isLoading={isLoading}/>
        )}
        {isSignInPopupOpen && (
          <Login isSignInPopupOpen={true} onClose={closeAllPopups} handleLoginSubmit={handleLoginSubmit} onReset={resetForm} handleChange={handleChange} errors={errors} submitError={submitError} isValid={isValid} openSignUpPopup={openSignUpPopup} isLoading={isLoading}/>
        )}
        {isSuccessPopupOpen && (
          <SuccessPopup isSuccessPopupOpen={true} onClose={closeAllPopups} openSignInPopup={openSignInPopup}/>
        )}
      </Route>
      <ProtectedRoute exact path="/saved-news" component={SavedNews} isLoggedIn={isLoggedIn} logout={logout} openSignInPopup={openSignInPopup} />
    </Switch>
    <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;

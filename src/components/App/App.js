import './App.css';
import React, {useState, useCallback} from 'react';
import { Route, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

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
    document.addEventListener("keydown", escapeButton);
  }
  const openSignInPopup = () => {
    closeAllPopups();
    setIsSignInPopupOpen(true);
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
    mainApi
      .register(values.email, values.password, values.username)
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        } else {
          setIsSignUpPopupOpen(false);
          setIsSuccessPopupOpen(true);
          resetForm();
        }
      })
      .catch((error) => setSubmitError(error.message));
  }

  const logout = ()=>{
    setIsLoggedIn(false);
    history.push('/');
    localStorage.removeItem('token');
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
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
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <>
      <Route exact path="/">
        <Main isLoggedIn={isLoggedIn} logout={logout} openSignUpPopup={openSignUpPopup} />
      </Route>
      <Route exact path="/saved-news">
        <SavedNews isLoggedIn={isLoggedIn} logout={logout} />
      </Route>
      <Footer />
      {isSignUpPopupOpen && (
        <Register isSignUpPopupOpen={true} onClose={closeAllPopups} handleRegisterSubmit={handleRegisterSubmit} onReset={resetForm} handleChange={handleChange} errors={errors} submitError={submitError} isValid={isValid} openSignInPopup={openSignInPopup}/>
      )}
      {isSignInPopupOpen && (
        <Login isSignInPopupOpen={true} onClose={closeAllPopups} handleLoginSubmit={handleLoginSubmit} onReset={resetForm} handleChange={handleChange} errors={errors} submitError={submitError} isValid={isValid} openSignUpPopup={openSignUpPopup}/>
      )}
      {isSuccessPopupOpen && (
        <SuccessPopup isSuccessPopupOpen={true} onClose={closeAllPopups} openSignInPopup={openSignInPopup}/>
      )}
    </>
    </CurrentUserContext.Provider>
  );
}

export default App;

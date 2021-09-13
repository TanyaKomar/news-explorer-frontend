import './App.css';
import React, {useState, useCallback} from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import mainApi from '../../utils/MainApi';
import PopupWithForm from '../PopupWithForm/PopupWithForm';



function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isOpenSigninPopup, setIsOpenSigninPopup] = React.useState(false);
  const [popupType, setPopupType] = React.useState('signin');
  const [submitError, setSubmitError] = React.useState('');

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const closePopup = () => {
    setIsOpenSigninPopup(false);
    document.removeEventListener("keydown", escapeButton);
  }
  const escapeButton = (evt) => {
    if (evt.key === "Escape") {
        closePopup();
    }
  }
  const openPopup = () => {
    setPopupType('signin');
    setIsOpenSigninPopup(true);
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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    mainApi
      .register(values.email, values.password, values.username)
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        } else {
          setPopupType('success');
        }
      })
      .catch((error) => setSubmitError(error.message));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <>
      <Route exact path="/">
        <Main isLoggedIn={isLoggedIn} openPopup={openPopup}/>
        <PopupWithForm popupType={popupType} setPopupType={setPopupType} isOpen={isOpenSigninPopup} onClose={closePopup} handleChange={handleChange} values={values} errors={errors} submitError={submitError} handleSignupSubmit={(e)=>handleSignupSubmit(e)} resetForm={resetForm}/>
      </Route>
      <Route exact path="/saved-news">
        <SavedNewsHeader isLoggedIn={isLoggedIn}/>
        <SavedNews />
      </Route>
      <Footer />
    </>
    </CurrentUserContext.Provider>
  );
}

export default App;

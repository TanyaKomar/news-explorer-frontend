import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({isSignInPopupOpen, onClose, handleLoginSubmit, onReset, handleChange, errors, submitError, isValid, openSignUpPopup, isLoading}) {
  return (
    <PopupWithForm isOpen={isSignInPopupOpen} onClose={onClose} >
        <p className="popup__title">Sign in</p>
        <form className="popup__form" onSubmit={handleLoginSubmit} onReset={onReset} noValidate>
          <label className="popup__label" htmlFor="email">
              Email
            <input className="popup__input" id="email-input" name="email" type="email" placeholder="Enter email" required onChange={handleChange} disabled={isLoading === 'auth'} />
            <span className="popup__input-error">{errors.email}</span>
         </label>
         <label className="popup__label" htmlFor="password">
              Password
              <input className="popup__input" id="password-input" name="password" type="password" placeholder="Enter password" required onChange={handleChange} disabled={isLoading === 'auth'}/>
              <span className="popup__input-error">{errors.password}</span>
          </label>
          <span className="popup__submit-error">{submitError}</span>
          <button className={`popup__button ${isValid ? "popup__button_active" : ""}`} type="submit" disabled={!isValid}>Sign in</button>
        </form>
        <div className="popup__redirection">
            <p>or&nbsp;</p>
            <button className="popup__redirection-link" onClick={openSignUpPopup}>Sign up</button>
        </div>
    </PopupWithForm>
  );
}

export default Login;

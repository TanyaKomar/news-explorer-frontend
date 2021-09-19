import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register({isSignUpPopupOpen, onClose, handleRegisterSubmit, onReset, handleChange, errors, submitError, isValid, openSignInPopup}) {
  return (
    <PopupWithForm isOpen={isSignUpPopupOpen} onClose={onClose} >
        <p className="popup__title">Sign up</p>
        <form className="popup__form" onSubmit={handleRegisterSubmit} onReset={onReset} noValidate>
          <label className="popup__label" htmlFor="email">
              Email
            <input className="popup__input" id="email-input" name="email" type="email" placeholder="Enter email" required onChange={handleChange} />
            <span className="popup__input-error">{errors.email}</span>
         </label>
         <label className="popup__label" htmlFor="password">
              Password
              <input className="popup__input" id="password-input" name="password" type="password" placeholder="Enter password" required onChange={handleChange}/>
              <span className="popup__input-error">{errors.password}</span>
          </label>
          <label className="popup__label" htmlFor="username">
                Username
                <input className="popup__input" id="username-input" name="username" type="text" placeholder="Enter your username" required onChange={handleChange}/>
                <span className="popup__input-error">{errors.username}</span>
          </label>
          <span className="popup__submit-error">{submitError}</span>
          <button className={`popup__button ${isValid ? "popup__button_active" : ""}`} type="submit" disabled={!isValid}>Sign up</button>
        </form>
        <div className="popup__redirection">
            <p>or&nbsp;</p>
            <button className="popup__redirection-link" onClick={openSignInPopup}>Sign in</button>
        </div>
    </PopupWithForm>
  );
}

export default Register;

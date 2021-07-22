import './PopupWithForm.css';
import React from 'react';

function PopupWithForm(popupType, isOpen, onClose) {
  return (
    <div className="popup_open">
      <div className="popup__content">
        <button className="popup__close" type="button" aria-label="Close popup" onClick={onClose}></button>
        <h3 className="popup__title">{popupType === 'success' ? 'Registration successfully completed' : `Sign ${popupType === 'signin' ? 'in' : 'up'}`}</h3>
        <form className="popup__form" name={`${popupType}Form`} noValidate>
          <label className="popup__label" htmlFor="email">
              Email
            <input className="popup__input" id="email-input" name="email" placeholder="Enter email" />
            <span className="popup__input-error">Invalid email address</span>
          </label>
          <label className="popup__label" htmlFor="password">
              Password
              <input className="popup__input" id="password-input" name="password" placeholder="Enter password" />
              <span className="popup__input-error">Invalid password</span>
          </label>
          <label className="popup__label" htmlFor="username">
              Username
              <input className="popup__input" id="username-input" name="username" placeholder="Enter your username" />
          </label>
          <span className="popup__submit-error">This email is not available</span>
          <button className="popup__button" type="submit">Sign up</button>
        </form>
        <p className="popup__redirection">or
            <button className="popup__redirection-link"> Sign in</button>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;

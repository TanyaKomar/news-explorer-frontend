import './PopupWithForm.css';
import React from 'react';

function PopupWithForm({popupType, setPopupType, isOpen, onClose, handleChange, errors, isValid, submitError, handleSignupSubmit, handleSigninSubmit, resetForm}) {
  if (popupType === 'success') {
    return (
      <div className={`popup${isOpen ? " popup_open" : ""}`}>
      <div className="popup__content">
      <button className="popup__close" type="button" aria-label="Close popup" onClick={onClose}></button>
      <h3 className="popup__title">Registration successfully completed</h3>
      <button className="popup__redirection-link" onClick={()=>setPopupType('signin')}>Sign in</button>
      </div>
      </div>
    )
  }

  return (
    <div className={`popup${isOpen ? " popup_open" : ""}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" aria-label="Close popup" onClick={onClose}></button>
        <h3 className="popup__title">{popupType === 'signin' ? 'Sign in' : 'Sign up'}</h3>
        <form className="popup__form" name={`${popupType}Form`} noValidate onSubmit={ (e)=> handleSignupSubmit(e) } onReset={resetForm}>
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
          {popupType !== 'signin' && 
            <label className="popup__label" htmlFor="username">
                Username
                <input className="popup__input" id="username-input" name="username" type="text" placeholder="Enter your username" required onChange={handleChange}/>
                <span className="popup__input-error">{errors.username}</span>
            </label>}
          <span className="popup__submit-error">{submitError}</span>
          <button className={`popup__button ${isValid ? 'popup__button_active' : ''}`} type="submit" >{popupType === 'signin' ? 'Sign in' : 'Sign up'}</button>
        </form>
        <p className="popup__redirection">or
            <button className="popup__redirection-link" onClick={()=>setPopupType(popupType === 'signin' ? 'signup' : 'signin')}>{popupType === 'signin' ? 'Sign up' : 'Sign in'}</button>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;

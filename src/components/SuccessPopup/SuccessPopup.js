import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SuccessPopup({isSuccessPopupOpen, onClose, openSignInPopup}) {
  return (
    <PopupWithForm isOpen={isSuccessPopupOpen} onClose={onClose} >
        <p className="popup__title">Registration successfully completed!</p>
        <button className="popup__redirection-link" onClick={openSignInPopup}>Sign in</button>
    </PopupWithForm>
  );
}

export default SuccessPopup;

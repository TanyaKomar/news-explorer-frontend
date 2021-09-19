import './PopupWithForm.css';
import React from 'react';

function PopupWithForm({isOpen, onClose, children})  {
  return (
    <div className={`popup${isOpen ? " popup_open" : ""}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" aria-label="Close popup" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;

import './Header.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchForm from '../SearchForm/SearchForm';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Header(isLoggedIn) {
  const [isOpenSigninPopup, setIsOpenSigninPopup] = React.useState(false);
  const [popupType, setPopupType] = React.useState('signin');
  const [isHome, setIsHome] = React.useState(true);

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

  return (
    <>
      <div className="header__overlay">
        <header className="header">
          <HeaderNav isLoggedIn={false} openPopup={openPopup} isHome={isHome} setIsHome={setIsHome}/>
        </header>
        <SearchForm />
      </div>
      <PopupWithForm popupType={popupType} setPopupType={setPopupType} isOpen={isOpenSigninPopup} onClose={closePopup}/>
    </>
  );
}

export default Header;

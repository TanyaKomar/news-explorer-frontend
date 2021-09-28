import './Header.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

function Header({isLoggedIn, openSignUpPopup, logout}) {
  const [isHome, setIsHome] = React.useState();

  return (
      <header className="header">
        <HeaderNav logout={logout} isLoggedIn={isLoggedIn} openSignUpPopup={openSignUpPopup} isHome={true} setIsHome={setIsHome}/>
      </header>
  );
}

export default Header;

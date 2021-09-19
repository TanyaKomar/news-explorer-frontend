import './Header.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

function Header({isLoggedIn, openSignUpPopup}) {
  const [isHome, setIsHome] = React.useState(true);

  return (
      <header className="header">
        <HeaderNav isLoggedIn={isLoggedIn} openSignUpPopup={openSignUpPopup} isHome={isHome} setIsHome={setIsHome}/>
      </header>
  );
}

export default Header;

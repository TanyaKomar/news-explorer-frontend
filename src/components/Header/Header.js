import './Header.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

function Header({isLoggedIn, openPopup}) {
  const [isHome, setIsHome] = React.useState(true);

  return (
      <header className="header">
        <HeaderNav isLoggedIn={false} openPopup={openPopup} isHome={isHome} setIsHome={setIsHome}/>
      </header>
  );
}

export default Header;

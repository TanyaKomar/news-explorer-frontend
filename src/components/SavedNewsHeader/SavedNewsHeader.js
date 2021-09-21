import './SavedNewsHeader.css';
import '../HeaderNav/HeaderNav.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

function SavedNewsHeader({isLoggedIn, logout}) {
  return (
    <header className="header">
      <HeaderNav isLoggedIn={isLoggedIn} isHome={false} logout={logout}/>
    </header>
  );
}

export default SavedNewsHeader;

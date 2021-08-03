import './Header.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <div className="header__overlay">
      <header className="header">
        <HeaderNav />
      </header>
      <SearchForm />
    </div>
  );
}

export default Header;

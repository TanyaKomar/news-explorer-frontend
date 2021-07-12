import './Header.css';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <header className="header">
      <HeaderNav />
    </header>
  );
}

export default Header;

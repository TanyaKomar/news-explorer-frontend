import './HeaderNav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../images/header-nav_menu.svg';

function HeaderNav() {
  return (
    <nav className="header-nav">
      <NavLink className="header-nav__title" to="/">
        NewsExplorer
      </NavLink>
      <img className="header-nav__menu" src={menu} alt="navigation menu"></img>
      <ul className="header-nav__items">
        <li>
          <NavLink className="header-nav__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <button className="header-nav__button" type="button" aria-label="signin">
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;

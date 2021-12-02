import './HeaderNavMenu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function HeaderNavMenu({ isLoggedIn, isHome, openSignUpPopup, logout, isMenuOpen, setIsMenuOpen }) {
const currentUser = React.useContext(CurrentUserContext);


  return (
    <div className={`header-nav-menu${isMenuOpen ? " header-nav-menu_open" : ""}`}>
      <div className="header-nav-menu__content">
      <NavLink className="header-nav-menu__title" to="/">
        NewsExplorer
      </NavLink>
      <button className="header-nav-menu__close" type="button" aria-label="Close navigation" onClick={()=>{setIsMenuOpen(false)}}></button>
      <ul className="header-nav-menu__items">
        <li>
          <NavLink className="header-nav-menu__link" to="/" onClick={()=>{setIsMenuOpen(false)}}>
            Home
          </NavLink>
        </li>
        {isLoggedIn &&
        <li>
          <NavLink className="header-nav-menu__link" to="/saved-news">
            Saved articles
          </NavLink>
        </li>}
      </ul>
      {!isLoggedIn &&
        <button className="header-nav-menu__button header-nav-menu__button_signin" type="button"
        aria-label="signin" onClick = {openSignUpPopup}>
          Sign in
        </button>}
      </div>
    </div>
  );
}

export default HeaderNavMenu;

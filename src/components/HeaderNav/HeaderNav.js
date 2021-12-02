import './HeaderNav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import HeaderNavMenu from '../HeaderNavMenu/HeaderNavMenu';

function HeaderNav({ isLoggedIn, openSignUpPopup, isHome, logout }) {
const currentUser = React.useContext(CurrentUserContext);
const [isMenuOpen, setIsMenuOpen] = React.useState(false);
// const mediaQuery = window.matchMedia('(min-width: 585px)');

// if (mediaQuery.matches) {
//   setIsMenuOpen(false);
// }

  return (
    <nav>
      <div className={`header-nav${!isHome ? " header-nav_theme_light" : ""}`}>
      <NavLink className="header-nav__title" to="/">
        NewsExplorer
      </NavLink>
      <button className="header-nav__menu" type="button" aria-label="Open navigation menu" onClick={()=>{setIsMenuOpen(true)}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="16" height="2" fill="white"/>
            <rect x="4" y="14" width="16" height="2" fill="white"/>
        </svg>
      </button>
      <ul className="header-nav__items">
        <li>
          <NavLink className={`header-nav__link${isHome ? " header-nav__link_active" : ""}`} to="/">
            Home
          </NavLink>
        </li>
        {!isLoggedIn && <li>
          <button className="header-nav__button header-nav__button_signin" type="button"
          aria-label="signin" onClick = {openSignUpPopup}>
            Sign in
          </button>
        </li>}
        {isLoggedIn && 
        <>
        <li>
          <NavLink className={`header-nav__link ${!isHome ? "header-nav__link_active" : ""}`} to="/saved-news">
            Saved articles
          </NavLink>
        </li>
        <li>
          <button className="header-nav__button header-nav__button_logout" onClick={logout} type="button" aria-label="logout">
            {currentUser.name}
            <svg className="header-nav__logout" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z" fill="white"/>
            </svg>
          </button>
        </li>
        </>}
      </ul>
      </div>
      {isMenuOpen && (<HeaderNavMenu isLoggedIn={isLoggedIn} isHome={isHome} openSignUpPopup={openSignUpPopup} logout={logout} isMenuOpen={true} setIsMenuOpen={setIsMenuOpen} />)}
    </nav>
  );
}

export default HeaderNav;

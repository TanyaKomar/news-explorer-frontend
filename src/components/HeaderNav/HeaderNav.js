import './HeaderNav.css';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <nav className="header-nav">
        <NavLink className="header-nav__title" to='/'>NewsExplorer</NavLink>
        <ul className="header-nav__items">
            <li>
                <NavLink className="header-nav__link" to='/'>Home</NavLink>
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

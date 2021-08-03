import './Footer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import githubIcon from '../../images/footer_github.svg';
import facebookIcon from '../../images/footer_facebook.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&#169; 2021 Supersite, Powered by News API</p>
      <nav className="footer__links">
        <div className="footer__left-links">
          <NavLink className="footer__link" to="/">
            Home
          </NavLink>
          <a className="footer__link" href="https://practicum.yandex.com/">
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__right-links">
          <a className="footer__link" href="https://github.com/yandex-praktikum">
            <img src={githubIcon} alt="github icon"></img>
          </a>
          <a className="footer__link" href="https://www.facebook.com/YPracticum">
            <img src={facebookIcon} alt="facebook icon"></img>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

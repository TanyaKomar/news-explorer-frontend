import React from 'react';
import './NotFound.css';
import notFound from '../../images/not-found_image.svg';

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__image" src={notFound} alt="nothing found"></img>
      <h3 className="not-found__title">Nothing Found</h3>
      <p className="not-found__text">Sorry, but nothing matched 
your search terms.</p>
    </div>
  );
}

export default NotFound;

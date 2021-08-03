import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <h2 className="search-form__title">What's going on in the world?</h2>
        <p className="search-form__subtitle">Find the latest news on any topic and save them in your personal account.</p>
        <form className="search-form__form">
          <input
            className="search-form__input"
            type="search"
            name="search"
            aria-label="search articles"
            placeholder="Enter topic"
            id="search-input"
          />
          <button className="search-form__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;

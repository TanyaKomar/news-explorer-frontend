import './About.css';
import React from 'react';
import authorImage from '../../images/about_image.png';

function About() {
  return (
    <section className="about">
      <img className="about__image" src={authorImage} alt="Author"></img>
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Hi, I'm Tanya.This is my final project at Yandex Practicum where I put everything I’ve learned throughout the
          program into practice and prove that I have what it takes to be a web developer
        </p>
      </div>
    </section>
  );
}

export default About;

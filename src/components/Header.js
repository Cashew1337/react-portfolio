import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">Project Portfolio</h1>
        </Link>
        <nav>
          <a href="#about">About Me</a>
          <a href="#work">My Work</a>
          <a href="#contact">Contact Me</a>
          <a href="#resume">Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

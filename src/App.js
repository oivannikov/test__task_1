import React, { useState } from 'react';
import classNames from 'classnames';

import Home from './components/Home/Home';
import { AboutUs } from './components/AboutUs/AboutUs';

import logo from '../src/images/logo.svg';
import './App.scss';
import './scss/normalize.scss'
import './scss/menu.scss';

function App() {
  const [isHome, setIsHome] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__img">
          <img
            className="header__logo"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="header__menu menu">
          <ul className="menu__list">
            <li
              className="menu__item"
              onClick={() => setIsHome(false)}
            >
              Home
            </li>
            <li
              className={classNames("menu__item", {"menu__item--active": isHome})}
              onClick={() => setIsHome(true)}
            >
              About&nbsp;Us
            </li>
          </ul>
        </div>
      </header>
      <section className="section__content content">
        {
          isHome ? <AboutUs /> : <Home />
        }
      </section>
    </>
  )
}

export default App;

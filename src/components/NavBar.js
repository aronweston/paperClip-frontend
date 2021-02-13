import React from 'react';
import Logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <nav>
        <a className="header-cta btn btn-tertiary" href="/">
          <button>random chat</button>
        </a>
        <a className="header-title" href="/">
          <div className="header-logo"></div>
          paperClip
        </a>
        <a className="header-profile btn btn-primary" href="/">profile</a>
      </nav>
    );
}

export default Header;
